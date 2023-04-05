export default function FormReview() {
  return (
    <div className="flex flex-col space-y-2">
      <div className="text-lg font-bold">Personal Info</div>
      <div className="flex space-x-2 text-sm ">
        <span className="font-semibold">Full name</span>
        <span className="text-gray-500">Test</span>
      </div>
      <div className="flex space-x-2 text-sm ">
        <span className="font-semibold">E-mail</span>
        <span className="text-gray-500">Test</span>
      </div>
      <div className="flex space-x-2 text-sm ">
        <span className="font-semibold">Phone number</span>
        <span className="text-gray-500">Test</span>
      </div>
      <div className="flex space-x-2 text-sm ">
        <span className="font-semibold">Address</span>
        <span className="text-gray-500">Test</span>
      </div>

      <div className="pt-4 text-lg font-bold">Preferences</div>
      <div className="flex space-x-2 text-sm ">
        <span className="font-semibold">Genre preferences</span>
        <span className="text-gray-500">Test</span>
      </div>

      <div className="pt-4 text-lg font-bold">Payment</div>
      <div className="flex space-x-2 text-sm ">
        <span className="font-semibold">Card number</span>
        <span className="text-gray-500">Test</span>
      </div>
      <div className="flex space-x-2 text-sm ">
        <span className="font-semibold">Expiry</span>
        <span className="text-gray-500">Test</span>
      </div>
      <div className="flex space-x-2 text-sm ">
        <span className="font-semibold">CVV</span>
        <span className="text-gray-500">Test</span>
      </div>
    </div>
  );
}
