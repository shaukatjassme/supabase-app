import Link from "next/link";

export default function Home() {
  return (
    <div className="container mx-auto py-32 text-center">
      <div className="row">
        <div className="col-12">
         
          <h1 className="header font-bold text-3xl mb-4">Welocme toSupabase Authentication and Storage</h1>
          <p>
            Explore our authentication and storage solutions with a
            straightforward profile management example. Create a user profile
            and upload an avatar image seamlessly and securely.<br/>
           <span className="text-lg font-bold text-right mt-4 mb-4"> Click the button below to update your profile. Thank you.</span>
          </p>
        </div>
        <div className="col-12 form-widget">
          <Link href="/login">
            <button className="button block primary w-full mb-4 rounded font-bold">Login Page</button>{" "}
          </Link>
        </div>
      </div>
    </div>
  );
}
