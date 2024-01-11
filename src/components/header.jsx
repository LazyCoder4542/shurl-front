import Image from "next/image";
function Header() {
  return (
    <header className="flex items-center justify-between px-16 py-4">
      <div>
        <Image
          width={140}
          height={61.5}
          alt="logo"
          src="/images/logo.png"
        />
      </div>
      <div className="flex gap-x-8">
        <button className="btn-secondary">Login</button>
        <button className="btn-primary">Sign up</button>
      </div>
    </header>
  );
}

export default Header;