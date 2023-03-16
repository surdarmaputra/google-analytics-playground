import Button from 'components/atoms/Button';

export default function SubscribeSection() {
  return (
    <section className="container mx-auto my-36 px-8 md:px-12">
      <div className='bg-slate-200 flex space-x-4 p-8 rounded-lg justify-center'>
        <input className='px-4 py-3 rounded-md w-4/6' placeholder="Your email" type="email" />
        <Button>
          Subscribe Now
        </Button>
      </div>
    </section>
  );
}