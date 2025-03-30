import React from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { LogOut, ShoppingBag, Tag, Package, Home, User } from "lucide-react";
import { toast } from "sonner";
import AuthService from "@/services/auth";

interface AdminLayoutProps {
  children: React.ReactNode;
  title: string;
}

const AdminLayout: React.FC<AdminLayoutProps> = ({ children, title }) => {
  const navigate = useNavigate();

  React.useEffect(() => {
    // Check if user is admin
    if (!AuthService.isAdmin()) {
      navigate("/admin/login");
    }
  }, [navigate]);

  const handleLogout = () => {
    AuthService.logout();
    toast.success("Logged out successfully");
    navigate("/admin/login");
  };

  return (
    <div className="flex min-h-screen bg-gray-100">
      {/* Sidebar */}
      <div className="w-64 bg-white shadow-sm">
        <div className="p-4 border-b">
          <h2 className="text-xl font-bold">Admin Panel</h2>
        </div>
        <nav className="p-4">
          <ul className="space-y-2">
            <li>
              <Button 
                variant="ghost" 
                className="w-full justify-start"
                onClick={() => navigate("/admin")}
              >
                <Home className="mr-2 h-4 w-4" />
                Dashboard
              </Button>
            </li>
            <li>
              <Button 
                variant="ghost" 
                className="w-full justify-start"
                onClick={() => navigate("/admin/products")}
              >
                <Package className="mr-2 h-4 w-4" />
                Products
              </Button>
            </li>
            <li>
              <Button 
                variant="ghost" 
                className="w-full justify-start"
                onClick={() => navigate("/admin/categories")}
              >
                <Tag className="mr-2 h-4 w-4" />
                Categories
              </Button>
            </li>
            <li>
              <Button 
                variant="ghost" 
                className="w-full justify-start"
                onClick={() => navigate("/admin/orders")}
              >
                <ShoppingBag className="mr-2 h-4 w-4" />
                Orders
              </Button>
            </li>
            <li>
              <Button 
                variant="ghost" 
                className="w-full justify-start"
                onClick={() => navigate("/admin/customers")}
              >
                <User className="mr-2 h-4 w-4" />
                Customers
              </Button>
            </li>
            <li className="pt-4 border-t mt-4">
              <Button 
                variant="ghost" 
                className="w-full justify-start text-red-500 hover:text-red-700 hover:bg-red-50"
                onClick={handleLogout}
              >
                <LogOut className="mr-2 h-4 w-4" />
                Logout
              </Button>
            </li>
          </ul>
        </nav>
      </div>
      
      {/* Main content */}
      <div className="flex-1">
        <header className="bg-white shadow-sm p-4">
          <h1 className="text-xl font-bold">{title}</h1>
        </header>
        <main className="p-6">
          {children}
        </main>
      </div>
    </div>
  );
};

export default AdminLayout;
