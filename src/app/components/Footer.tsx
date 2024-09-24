import Link from "next/link";

const Footer: React.FC = () => {
    return (
      <footer className="bg-gray-900 text-white py-8">
        <div className="container mx-auto grid grid-cols-2 md:grid-cols-4 gap-8">
          <div>
            <h3 className="font-bold mb-2">Về chúng tôi</h3>
            <ul>
              <li><Link href="#" className="hover:underline">Giới thiệu</Link></li>
              <li><Link href="#" className="hover:underline">Tuyển dụng</Link></li>
              <li><Link href="#" className="hover:underline">Chính sách bảo mật</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold mb-2">Hỗ trợ khách hàng</h3>
            <ul>
              <li><Link href="#" className="hover:underline">Liên hệ</Link></li>
              <li><Link href="#" className="hover:underline">Hướng dẫn mua hàng</Link></li>
              <li><Link href="#" className="hover:underline">Chính sách đổi trả</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold mb-2">Dịch vụ</h3>
            <ul>
              <li><Link href="#" className="hover:underline">Giao hàng</Link></li>
              <li><Link href="#" className="hover:underline">Thanh toán</Link></li>
              <li><Link href="#" className="hover:underline">Kiểm tra đơn hàng</Link></li>
            </ul>
          </div>
        </div>
        <div className="mt-8 text-center text-sm text-gray-400">
          © 2024 Nhà Thuốc Long Châu. All rights reserved.
        </div>
      </footer>
    );
  };
  
  export default Footer;
  