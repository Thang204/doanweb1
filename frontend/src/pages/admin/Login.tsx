import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import AuthService, { LoginCredentials } from "@/services/auth";
import { ApiError } from "@/services/api";

interface LoginFormData extends LoginCredentials {
  email: string;
  password: string;
}

const AdminLogin = () => {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);
  
  const { 
    register, 
    handleSubmit, 
    formState: { errors },
    setError 
  } = useForm<LoginFormData>();
  
  const onSubmit = async (data: LoginFormData) => {
    try {
      setIsLoading(true);
      
      const credentials = {
        email: data.email.trim().toLowerCase(),
        password: data.password
      };
      
      const response = await AuthService.login(credentials);
      
      if (response.user.role !== 'admin') {
        AuthService.logout();
        toast.error("Access denied. Admin privileges required.");
        return;
      }
      
      toast.success("Welcome back, admin!");
      navigate("/admin", { replace: true });
    } catch (error) {
      if (error instanceof ApiError) {
        switch (error.status) {
          case 401:
            setError('email', { message: 'Invalid credentials' });
            setError('password', { message: 'Invalid credentials' });
            break;
          case 429:
            toast.error("Too many attempts. Please try again later.");
            break;
          default:
            toast.error(error.message || "An error occurred");
        }
      } else {
        toast.error("Unable to connect to server");
      }
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <Card className="w-full max-w-md p-6">
        <CardHeader className="space-y-1">
          <CardTitle className="text-2xl font-bold text-center">Admin Login</CardTitle>
          <CardDescription className="text-center">
            Enter your credentials to access the admin panel
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                type="email"
                autoComplete="email"
                placeholder="admin@example.com"
                {...register("email", { 
                  required: "Email is required",
                  pattern: {
                    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                    message: "Invalid email address"
                  }
                })}
                aria-invalid={errors.email ? "true" : "false"}
                disabled={isLoading}
              />
              {errors.email && (
                <p className="text-sm text-red-500" role="alert">{errors.email.message}</p>
              )}
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="password">Password</Label>
              <Input
                id="password"
                type="password"
                autoComplete="current-password"
                {...register("password", { 
                  required: "Password is required",
                  minLength: {
                    value: 6,
                    message: "Password must be at least 6 characters"
                  }
                })}
                aria-invalid={errors.password ? "true" : "false"}
                disabled={isLoading}
              />
              {errors.password && (
                <p className="text-sm text-red-500" role="alert">{errors.password.message}</p>
              )}
            </div>
            
            <Button 
              type="submit" 
              className="w-full"
              disabled={isLoading}
            >
              {isLoading ? (
                <span className="flex items-center gap-2">
                  <span className="animate-spin">⌛</span> Logging in...
                </span>
              ) : (
                "Login"
              )}
            </Button>
          </form>
        </CardContent>
      </Card>
    </div>
  );
};

export default AdminLogin;
