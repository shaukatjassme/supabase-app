import { login, signup } from './actions'

export default function LoginPage() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-black-100">
      <form className="w-full max-w-md bg-white rounded-lg shadow-md p-8 space-y-6">
        <h2 className="text-2xl font-bold text-center text-gray-700">Welcome Back</h2>
        
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email:</label>
          <input
            id="email"
            name="email"
            type="email"
            required
            className="w-full mt-1 p-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
          />
        </div>

        <div>
          <label htmlFor="password" className="block text-sm font-medium text-gray-700">Password:</label>
          <input
            id="password"
            name="password"
            type="password"
            required
            className="w-full mt-1 p-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
          />
        </div>

        <div className="flex items-center justify-between">
          <button
            type="submit"
            formAction={login}
            className="w-full py-2 px-4 bg-blue-600 text-white font-medium rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
          >
            Log in
          </button>
        </div>
        <div className="flex items-center justify-between">
          <button
            type="submit"
            formAction={signup}
            className="w-full py-2 px-4 bg-green-600 text-white font-medium rounded-md hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500"
          >
            Sign up
          </button>
        </div>
      </form>
    </div>
  )
}
