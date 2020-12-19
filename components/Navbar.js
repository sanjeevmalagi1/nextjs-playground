import Link from 'next/link'

const Navbar = () => {
  return (
    <div className="bg-gray-500 fixed w-full">
      <div className="container mx-auto flex justify-between">
        <Link href="/">
          <a className="p-5 bg-red-500 text-white cursor-pointer">
            Title
          </a>
        </Link>
        <ul className="flex">
          <Link href="/"><li className="p-5 bg-red-500 cursor-pointer"> Home </li></Link>
          <Link href="/about"><li className="p-5 bg-red-500 cursor-pointer"> About </li></Link>
        </ul>
      </div>
    </div>
  );
};


export default Navbar;
