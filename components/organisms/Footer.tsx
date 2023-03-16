const companyLinks = [
  {
    title: 'About',
    href: '#',
  },
  {
    title: 'Terms of Service',
    href: '#',
  },
  {
    title: 'Privacy Policy',
    href: '#',
  },
  {
    title: 'Cookie Policy',
    href: '#',
  },
];

const entertainmentLinks = [
  {
    title: 'Upcoming Movies',
    href: '#',
  },
  {
    title: 'Trending',
    href: '#',
  },
  {
    title: 'TV Series',
    href: '#',
  },
];

const partnershipLinks = [
  {
    title: 'Copyright',
    href: '#',
  },
  {
    title: 'Affiliate',
    href: '#',
  },
  {
    title: 'Brand Guideline',
    href: '#',
  },
];

function Logo() {
  return (
    <div className="w-full text-center text-lg font-extrabold sm:w-fit sm:text-left">
      <span className="text-violet-500">Sur</span>
      <span className="dark:text-slate-400">Play</span>
    </div>
  );
}

export default function Footer() {
  return (
    <footer className="mt-28 bg-slate-50 dark:bg-black">
      <div className="container mx-auto flex flex-col items-start space-y-12 px-8 pb-8 pt-12 md:flex-row md:space-y-0 md:space-x-12 md:px-12">
        <div className="flex w-full flex-col space-y-4 text-center md:w-2/5 md:text-left">
          <Logo />
          <p className="text-sm text-slate-600">
          Experience the magic of cinema with our extensive collection of movies - from action-packed adventures to heartwarming romances. Sit back, grab some popcorn, and let the show begin!
          </p>
        </div>
        <div className="w-full text-center text-slate-600 md:w-1/5 md:text-left">
          <div className="text-sm font-semibold">Company</div>
          <ul className="text-sm">
            {companyLinks.map(({ title, href }, index) => (
              <li className="pt-3" key={index}>
                <a
                  className="underline decoration-transparent underline-offset-4 transition hover:decoration-slate-700"
                  href={href}
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  {title}
                </a>
              </li>
            ))}
          </ul>
        </div>
        <div className="w-full text-center text-slate-600 md:w-1/5 md:text-left">
          <div className="text-sm font-semibold">Entertainment</div>
          <ul className="text-sm">
            {entertainmentLinks.map(({ title, href }, index) => (
              <li className="pt-3" key={index}>
                <a
                  className="underline decoration-transparent underline-offset-4 transition hover:decoration-slate-700"
                  href={href}
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  {title}
                </a>
              </li>
            ))}
          </ul>
        </div>
        <div className="w-full text-center text-slate-600 md:w-1/5 md:text-left">
          <div className="text-sm font-semibold text-slate-600">
            Partnership
          </div>
          <ul className="text-sm">
            {partnershipLinks.map(({ title, href }, index) => (
              <li className="pt-3" key={index}>
                <a
                  className="underline decoration-transparent underline-offset-4 transition hover:decoration-slate-700"
                  href={href}
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  {title}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="container mx-auto border-t border-slate-200 p-8 text-center text-sm text-slate-600 dark:border-slate-900 md:flex-row md:px-12">
        &copy; {new Date().getFullYear()} UniqueFund. All rights reserved.
      </div>
    </footer>
  );
}