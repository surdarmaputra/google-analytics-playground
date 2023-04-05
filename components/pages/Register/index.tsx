import { FormEvent, useEffect } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';

import { upperCase } from 'lodash-es';

import Button from 'components/atoms/Button';
import Footer from 'components/organisms/Footer';
import Header from 'components/organisms/Header';

import FormReview from './FormReview';
import PaymentForm from './PaymentForm';
import PersonalInfoForm from './PersonalInfoForm';
import PreferencesForm from './PreferencesForm';

enum FormSteps {
  PersonalInfo,
  Preferences,
  Payment,
  Review,
}

export default function Register() {
  const router = useRouter();
  const { step } = router.query;

  const handleBack = (event: FormEvent) => {
    event.preventDefault();
    router.push(`/register/${Number(step) - 1}`);
  };

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();
    if (Number(step) !== FormSteps.Review) {
      router.push(`/register/${Number(step) + 1}`);
    }
  };

  useEffect(() => {
    if (!step) {
      router.push(`/register/${FormSteps.PersonalInfo}`);
    }
  }, [router, step]);

  return (
    <>
      <div className="absolute left-0 top-24 -z-10 h-72 w-72 rounded-full bg-primary-500 opacity-10 blur-3xl"></div>
      <div className="absolute right-0 top-4 -z-10 h-72 w-72 rounded-full bg-danger-500 opacity-10 blur-3xl"></div>

      <Header />

      <h1 className="container my-24 mx-auto px-8 md:px-12">
        Create an Account
      </h1>

      <div className="container my-4 mx-auto flex px-8 md:px-12">
        {Object.entries(FormSteps)
          .filter(([key]) => isNaN(Number(key)))
          .map(([key, value]) => (
            <Link
              className={`
                w-1/4 grow cursor-pointer border-b-4 px-4 py-4 text-sm font-bold no-underline shadow-md hover:bg-gray-100
                ${
                  Number(step) === value
                    ? 'border-b-primary-400'
                    : 'border-b-gray-200'
                }
              `}
              href={`/register/${value}`}
              key={key}
            >
              {upperCase(key)}
            </Link>
          ))}
      </div>

      <form
        className="container my-10 mx-auto flex flex-col space-y-5 px-8 md:px-12"
        onSubmit={handleSubmit}
      >
        {Number(step) === FormSteps.PersonalInfo && <PersonalInfoForm />}
        {Number(step) === FormSteps.Preferences && <PreferencesForm />}
        {Number(step) === FormSteps.Payment && <PaymentForm />}
        {Number(step) === FormSteps.Review && <FormReview />}

        <div className="flex justify-start space-x-2 pt-8">
          {Number(step) !== FormSteps.PersonalInfo && (
            <Button onClick={handleBack} type="button" variation="light">
              Back
            </Button>
          )}
          <Button type="submit">
            {Number(step) === FormSteps.Review ? 'Submit' : 'Next'}
          </Button>
        </div>
      </form>

      <Footer />
    </>
  );
}
