import React from "react";
import { useNavigate } from "react-router-dom";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import AuthService from "@/services/auth";

const AdminDashboard = () => {
  const navigate = useNavigate();

  React.useEffect(() => {
    // Check if user is admin
    if (!AuthService.isAdmin()) {
      navigate("/admin/login");
    }
  }, [navigate]);

  return (
    <div className="container mx-auto py-10">
      <h1 className="text-3xl font-bold mb-8">Admin Dashboard</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <Card>
          <CardHeader>
            <CardTitle>Products</CardTitle>
            <CardDescription>Manage your product inventory</CardDescription>
          </CardHeader>
          <CardContent>
            <Button 
              variant="default" 
              className="w-full"
              onClick={() => navigate("/admin/products")}
            >
              View Products
            </Button>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader>
            <CardTitle>Categories</CardTitle>
            <CardDescription>Manage product categories</CardDescription>
          </CardHeader>
          <CardContent>
            <Button 
              variant="default" 
              className="w-full"
              onClick={() => navigate("/admin/categories")}
            >
              View Categories
            </Button>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader>
            <CardTitle>Orders</CardTitle>
            <CardDescription>View and manage customer orders</CardDescription>
          </CardHeader>
          <CardContent>
            <Button 
              variant="default" 
              className="w-full"
              onClick={() => navigate("/admin/orders")}
            >
              View Orders
            </Button>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader>
            <CardTitle>Customers</CardTitle>
            <CardDescription>Manage customer accounts</CardDescription>
          </CardHeader>
          <CardContent>
            <Button 
              variant="default" 
              className="w-full"
              onClick={() => navigate("/admin/customers")}
            >
              View Customers
            </Button>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default AdminDashboard;
