"use client"
import Link from 'next/link'
import useHeader from "@/hooks/useHeader";
import Image from "next/image";
import DropdownMenu from './Common/DropdownMenu';
import InputBox from './Common/InputBox';
function Header() {
  const { options } = useHeader()
  return (
    <header className="flex items-center justify-between px-8 py-4">
      <div>
        <Image
          width={140}
          height={61.5}
          alt="logo"
          src="/images/logo.svg"
          priority
          quality={100}
          unoptimized
        />
      </div>
      <InputBox placeholder="search" />
      <DropdownMenu />
    </header>
  );
  return (
    <header className="hidden flex items-center justify-between px-16 py-8">
      <div>
        <Image
          width={140}
          height={61.5}
          alt="logo"
          src="/images/logo.svg"
          priority
          quality={100}
          unoptimized
        />
      </div>
      <div className="flex gap-x-8">
        <Link href="login">
          <button className='btn-secondary'>
            Login
          </button>
        </Link>
        <Link href="signup">
          <button className="btn-primary">Sign up</button>
        </Link>
      </div>
    </header>
  );
}

export default Header;