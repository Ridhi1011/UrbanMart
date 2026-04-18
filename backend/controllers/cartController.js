import asyncHandler from '../middleware/asyncHandler.js';
import Cart from '../models/cartModel.js';

// @desc    Get logged in user cart
// @route   GET /api/cart
// @access  Private
const getCart = asyncHandler(async (req, res) => {
  const cart = await Cart.findOne({ user: req.user._id });

  if (cart) {
    // Map product back to _id for the frontend
    const mappedCartItems = cart.cartItems.map((item) => ({
      ...item._doc,
      _id: item.product,
    }));
    res.json({ ...cart._doc, cartItems: mappedCartItems });
  } else {
    res.json({ cartItems: [] });
  }
});

// @desc    Save/Sync cart
// @route   POST /api/cart
// @access  Private
const syncCart = asyncHandler(async (req, res) => {
  const { cartItems } = req.body;

  // Map _id to product for backend schema
  const mappedCartItems = cartItems.map((item) => ({
    ...item,
    product: item._id,
  }));

  let cart = await Cart.findOne({ user: req.user._id });

  if (cart) {
    cart.cartItems = mappedCartItems;
    const updatedCart = await cart.save();
    res.json(updatedCart);
  } else {
    const newCart = new Cart({
      user: req.user._id,
      cartItems: mappedCartItems,
    });
    const createdCart = await newCart.save();
    res.status(201).json(createdCart);
  }
});

// @desc    Clear cart
// @route   DELETE /api/cart
// @access  Private
const clearCart = asyncHandler(async (req, res) => {
  const cart = await Cart.findOne({ user: req.user._id });

  if (cart) {
    cart.cartItems = [];
    await cart.save();
    res.json({ message: 'Cart cleared' });
  } else {
    res.status(404);
    throw new Error('Cart not found');
  }
});

export { getCart, syncCart, clearCart };
