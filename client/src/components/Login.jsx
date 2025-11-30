import React, { useEffect } from "react";
import { usePrivy } from "@privy-io/react-auth";
import { useNavigate, Link } from "react-router-dom";

function LoginPage() {
  const { login, ready, authenticated } = usePrivy();
  const navigate = useNavigate();

  useEffect(() => {
    if (ready && authenticated) {
      navigate("/write");
    }
  }, [ready, authenticated, navigate]);

  if (!ready) {
    return (
      <div className="flex justify-center items-center h-screen bg-background-light dark:bg-background-dark">
        <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-b-4 border-primary"></div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background-light dark:bg-background-dark text-gray-900 dark:text-gray-200">
      <div className="min-h-screen flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-md w-full space-y-8">
          <div className="text-center">
            <div className="mx-auto h-24 w-24 rounded-full bg-primary flex items-center justify-center mb-6 shadow-lg">
              <span className="material-icons-outlined text-4xl text-white">lock</span>
            </div>
            <h1 className="text-3xl font-bold text-primary mb-2">
              GramChecker
            </h1>
            <p className="text-gray-600 dark:text-gray-400 mb-8">
              Elevate your writing with the power of AI
            </p>
          </div>

          <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-8">
            <div className="text-center mb-8">
              <h2 className="text-2xl font-bold text-primary">Welcome Back</h2>
              <p className="text-gray-600 dark:text-gray-400 mt-2">
                Sign in to access your writing dashboard
              </p>
            </div>

            <div className="space-y-6">
              <button
                onClick={login}
                className="w-full bg-primary text-white py-4 rounded-xl font-semibold hover:opacity-90 transition-all duration-300 flex items-center justify-center shadow-lg"
              >
                <span className="material-icons-outlined mr-3">mail</span>
                Sign in with Email
              </button>

              <div className="relative">
                <div className="absolute inset-0 flex items-center">
                  <div className="w-full border-t border-gray-300 dark:border-gray-600"></div>
                </div>
                <div className="relative flex justify-center text-sm">
                  <span className="px-2 bg-white dark:bg-gray-800 text-gray-600 dark:text-gray-400">
                    Or continue with
                  </span>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <button
                  onClick={login}
                  className="w-full bg-gray-100 dark:bg-gray-700 text-gray-900 dark:text-white py-3 rounded-xl font-semibold hover:bg-gray-200 dark:hover:bg-gray-600 transition-all duration-300 flex items-center justify-center"
                >
                  <span className="material-icons-outlined mr-2">person</span>
                  Google
                </button>
                <button
                  onClick={login}
                  className="w-full bg-gray-100 dark:bg-gray-700 text-gray-900 dark:text-white py-3 rounded-xl font-semibold hover:bg-gray-200 dark:hover:bg-gray-600 transition-all duration-300 flex items-center justify-center"
                >
                  <span className="material-icons-outlined mr-2">account_balance_wallet</span>
                  Wallet
                </button>
              </div>
            </div>

            <div className="mt-8 text-center">
              <button
                onClick={login}
                className="w-full bg-primary text-white py-4 rounded-xl font-bold hover:opacity-90 transition-all duration-300 flex items-center justify-center shadow-lg"
              >
                <span className="material-icons-outlined mr-3">rocket_launch</span>
                Create New Account
              </button>
              
              <p className="mt-6 text-sm text-gray-600 dark:text-gray-400">
                New to GramChecker? Click above to create your account and begin your journey to better writing!
              </p>
            </div>
          </div>

          <div className="text-center text-sm text-gray-600 dark:text-gray-400">
            <p>© {new Date().getFullYear()} GramChecker. All rights reserved.</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LoginPage;