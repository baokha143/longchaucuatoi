import Image from "next/image";
import Link from "next/link";

const Header: React.FC = () => {
  return (
    <header className="bg-white shadow-md">
      <div className="container mx-auto flex justify-between items-center p-4">
        <div className="flex items-center">
          <Image
            src="https://cms-prod.s3-sgn09.fptcloud.com/smalls/Logo_LC_Default_2e36f42b6b.svg"
            alt="Logo"
            width={180}
            height={38}
          />
        </div>
        <nav className="hidden md:flex space-x-6">
          <Link href="/" className="text-gray-700 hover:text-blue-500">Trang Chủ</Link>
          <Link href="/gioi-thieu" className="text-gray-700 hover:text-blue-500">Giới Thiệu</Link>
          <Link href="/gop-suc-khoe" className="text-gray-700 hover:text-blue-500">Góp Sức Khỏe</Link>
          <Link href="/tin-tuc" className="text-gray-700 hover:text-blue-500">Tin Tức</Link>
          <Link href="/lien-he" className="text-gray-700 hover:text-blue-500">Liên Hệ</Link>
        </nav>
        <div className="flex items-center space-x-4">
          <input
            type="text"
            placeholder="Tìm kiếm sản phẩm..."
            className="border rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <Link href="/gio-hang" className="text-gray-700 hover:text-blue-500">Giỏ Hàng</Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
