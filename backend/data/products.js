const products = [
  {
    name: 'Airpods Wireless Bluetooth Headphones',
    image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?q=80&w=2070&auto=format&fit=crop',
    description:
      'Bluetooth technology lets you connect it with compatible devices wirelessly High-quality AAC audio offers immersive listening experience Built-in microphone allows you to take calls while working',
    brand: 'Apple',
    category: 'Electronics',
    price: 7289.19,
    countInStock: 10,
  },
  {
    name: 'iPhone 13 Pro 256GB Memory',
    image: 'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?q=80&w=2080&auto=format&fit=crop',
    description:
      'Introducing the iPhone 13 Pro. A transformative triple-camera system that adds tons of capability without complexity. An unprecedented leap in battery life',
    brand: 'Apple',
    category: 'Electronics',
    price: 48599.19,
    countInStock: 7,
  },
  {
    name: 'Cannon EOS 80D DSLR Camera',
    image: 'https://images.unsplash.com/photo-1516035069371-29a1b244cc32?q=80&w=1964&auto=format&fit=crop',
    description:
      'Characterized by versatile imaging specs, the Canon EOS 80D further clarifies itself using a pair of robust focusing systems and an intuitive design',
    brand: 'Cannon',
    category: 'Electronics',
    price: 75329.19,
    countInStock: 5,
  },
  {
    name: 'Sony Playstation 5',
    image: 'https://images.unsplash.com/photo-1606144042614-b2417e99c4e3?q=80&w=2070&auto=format&fit=crop',
    description:
      'The ultimate home entertainment center starts with PlayStation. Whether you are into gaming, HD movies, television, music',
    brand: 'Sony',
    category: 'Electronics',
    price: 32399.19,
    countInStock: 11,
  },
  {
    name: 'Logitech G-Series Gaming Mouse',
    image: 'https://images.unsplash.com/photo-1527864550417-7fd91fc51a46?q=80&w=2067&auto=format&fit=crop',
    description:
      'Get a better handle on your games with this Logitech LIGHTSYNC gaming mouse. The six programmable buttons allow customization for a smooth playing experience',
    brand: 'Logitech',
    category: 'Electronics',
    price: 4049.19,
    countInStock: 7,
  },
  {
    name: 'Amazon Echo Dot 3rd Generation',
    image: 'https://images.unsplash.com/photo-1543512214-318c7553f230',
    description:
      'Meet Echo Dot - Our most popular smart speaker with a fabric design. It is our most compact smart speaker that fits perfectly into small space',
    brand: 'Amazon',
    category: 'Electronics',
    price: 2429.19,
    countInStock: 0,
  },
  {
    name: 'Dell XPS 13 Laptop',
    image: 'https://images.unsplash.com/photo-1496181133206-80ce9b88a853?q=80&w=2071&auto=format&fit=crop',
    description:
      'The XPS 13 is a powerful, compact laptop with a stunning InfinityEdge display. Perfect for productivity and entertainment on the go.',
    brand: 'Dell',
    category: 'Electronics',
    price: 125000.00,
    countInStock: 5,
  },
  {
    name: 'OnePlus 10 Pro',
    image: 'https://images.unsplash.com/photo-1598327105666-5b89351aff97?q=80&w=2054&auto=format&fit=crop',
    description:
      'Experience the fastest display and unparalleled camera performance with the OnePlus 10 Pro. Powered by the latest Snapdragon processor.',
    brand: 'OnePlus',
    category: 'Electronics',
    price: 66999.00,
    countInStock: 12,
  },
  {
    name: 'Samsung QLED 4K Smart TV',
    image: 'https://images.unsplash.com/photo-1593359677879-a4bb92f829d1?q=80&w=2070&auto=format&fit=crop',
    description:
      'Bring the cinema home with vibrant colors and deep contrast. Smart TV features allow you to stream your favorite shows with ease.',
    brand: 'Samsung',
    category: 'Electronics',
    price: 89999.00,
    countInStock: 8,
  },
  {
    name: 'Mechanical RGB Gaming Keyboard',
    image: 'https://images.unsplash.com/photo-1511467687858-23d96c32e4ae?q=80&w=2070&auto=format&fit=crop',
    description:
      'Customizable RGB lighting and tactile mechanical switches provide the ultimate gaming experience. Durable and responsive.',
    brand: 'Razer',
    category: 'Accessories',
    price: 8500.00,
    countInStock: 25,
  },
  {
    name: 'Noise Cancelling Wireless Earbuds',
    image: 'https://images.unsplash.com/photo-1590658268037-6bf12165a8df?q=80&w=1932&auto=format&fit=crop',
    description:
      'Industry-leading active noise cancellation and crystal clear audio. Ergonomic design for all-day comfort.',
    brand: 'Sony',
    category: 'Accessories',
    price: 19990.00,
    countInStock: 15,
  },
  {
    name: 'Xbox Wireless Controller',
    image: 'https://images.unsplash.com/photo-1606813907291-d86efa9b94db',
    description:
      'Experience modernized design and enhanced comfort. Share your greatest moments with the new dedicated Share button.',
    brand: 'Microsoft',
    category: 'Gaming',
    price: 5490.00,
    countInStock: 20,
  },
  {
    name: 'Pro Gaming Headset',
    image: 'https://images.unsplash.com/photo-1546435770-a3e426bf472b?q=80&w=2065&auto=format&fit=crop',
    description:
      'Surround sound and high-quality microphone for competitive gaming. Breathable ear cushions for long sessions.',
    brand: 'HyperX',
    category: 'Gaming',
    price: 7999.00,
    countInStock: 10,
  },
  {
    name: 'Ergonomic Gaming Chair',
    image: 'https://images.unsplash.com/photo-1542751371-adc38448a05e?auto=format&fit=crop&w=800',
    description:
      'Adjustable armrests, lumbar support, and memory foam padding. Built for comfort during the longest gaming marathons.',
    brand: 'Secretlab',
    category: 'Gaming',
    price: 35000.00,
    countInStock: 5,
  },
  {
    name: 'Smart LED Bulb (B22)',
    image: 'https://images.unsplash.com/photo-1565814329452-e1efa11c5b89?q=80&w=2070&auto=format&fit=crop',
    description:
      'Control your lighting from your phone or with voice commands. Millions of colors to suit any mood.',
    brand: 'Philips',
    category: 'Home Appliances',
    price: 1299.00,
    countInStock: 100,
  },
  {
    name: 'Robot Vacuum Cleaner',
    image: 'https://images.unsplash.com/photo-1518640467707-6811f4a6ab73?auto=format&fit=crop&w=800',
    description:
      'Automated cleaning with advanced mapping technology. Schedule cleanings and monitor progress from your smartphone.',
    brand: 'Mi',
    category: 'Home Appliances',
    price: 24999.00,
    countInStock: 10,
  },
  {
    name: 'Drip Coffee Maker',
    image: 'https://images.unsplash.com/photo-1517668808822-9ebb02f2a0e6?q=80&w=2076&auto=format&fit=crop',
    description:
      'Brew the perfect cup every morning with programmable features and a high-capacity carafe.',
    brand: 'Morphy Richards',
    category: 'Home Appliances',
    price: 4500.00,
    countInStock: 15,
  },
  {
    name: 'HEPA Filter Air Purifier',
    image: 'https://images.unsplash.com/photo-1590658268037-6bf12165a8df?auto=format&fit=crop&w=800',
    description:
      'Removes 99.97% of airborne particles, including dust, pollen, and smoke. Quiet operation with smart sensors.',
    brand: 'Dyson',
    category: 'Home Appliances',
    price: 45900.00,
    countInStock: 6,
  },
  {
    name: 'Convection Microwave Oven',
    image: 'https://images.unsplash.com/photo-1584285418504-065977baec2b?auto=format&fit=crop&w=800',
    description:
      'Grill, bake, and cook with ease. Features multiple power levels and pre-set cooking menus.',
    brand: 'Samsung',
    category: 'Home Appliances',
    price: 18500.00,
    countInStock: 8,
  },
  {
    name: 'Automatic Dishwasher',
    image: 'https://images.unsplash.com/photo-1581622558663-b2e33377dfb2?auto=format&fit=crop&w=800',
    description:
      'Energy-efficient cleaning with multiple wash cycles. Large capacity to fit all your dishes.',
    brand: 'Bosch',
    category: 'Home Appliances',
    price: 42000.00,
    countInStock: 4,
  },
  {
    name: 'High-Speed USB-C Hub',
    image: 'https://images.unsplash.com/photo-1544654803-b69140b285a1?q=80&w=2070&auto=format&fit=crop',
    description:
      'Expand your connectivity with multiple ports, including HDMI, USB-A, and SD card slots.',
    brand: 'Anker',
    category: 'Accessories',
    price: 3500.00,
    countInStock: 40,
  },
];

export default products;
