import { useState } from "react";

import mockups from "./assets/images/image-mockups.png";
import imgCurrency from "./assets/images/image-currency.jpg";
import imgRestaurant from "./assets/images/image-restaurant.jpg";
import imgPlane from "./assets/images/image-plane.jpg";
import imgConfetti from "./assets/images/image-confetti.jpg";

import {
  IconAPI,
  IconBudgeting,
  IconFacebook,
  IconInstagram,
  IconLogo,
  IconOnboarding,
  IconOnline,
  IconPinterest,
  IconTwitter,
  IconYoutube,
} from "./components/Icons";

import Menu from "./components/Menu";
import { Button } from "react-aria-components";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Menu></Menu>
      <main className="bg-neutral-2 font-PublicSans text-lg font-normal text-neutral-1">
        <section
          title="hero"
          className="flex flex-col gap-4 bg-neutral-3 pb-8 md:grid md:grid-cols-2 md:pl-8"
        >
          <picture className="relative h-96 w-full overflow-hidden bg-[url(src/assets/images/bg-intro-mobile.svg)] bg-cover bg-center bg-no-repeat md:order-1 md:bg-[url(src/assets/images/bg-intro-desktop.svg)]">
            <img
              src={mockups}
              alt="cellphone mockups"
              className="absolute left-1/2 top-0 z-10 w-full -translate-x-1/2 -translate-y-1/4 object-contain"
            />
          </picture>
          <div className="md:order-0 flex flex-col items-center gap-4 text-center md:items-start md:self-center md:pl-8 md:text-left">
            <h1 className="text-3xl text-primary-1">
              Next generation digital banking
            </h1>
            <p>
              Take your financial life online. Your Easybank account will be a
              one-stop-shop for spending, saving, budgeting, investing, and much
              more.
            </p>
            <Button className="rounded-3xl bg-gradient-to-r from-primary-2 to-primary-3 px-6 py-2 text-neutral-4 hover:from-primary-2/60 hover:to-primary-3/60">
              Request Invite
            </Button>
          </div>
        </section>
        <section
          title="details"
          className="flex flex-col items-center gap-8 px-8 py-8 text-center md:items-start md:px-16 md:px-8 md:text-left"
        >
          <h2 className="text-2xl text-primary-1">Why choose Easybank?</h2>
          <p>
            We leverage Open Banking to turn your bank account into your
            financial hub. Control your finances like never before.
          </p>
          <div className="flex flex-col items-center gap-8 md:flex-row md:items-start">
            <article className="flex flex-col items-center gap-4 md:items-start">
              <picture>
                <IconOnline></IconOnline>
              </picture>
              <h3 className="text-xl text-primary-1">Online Banking</h3>
              <p>
                Our modern web and mobile applications allow you to keep track
                of your finances wherever you are in the world.
              </p>
            </article>
            <article className="flex flex-col items-center gap-4 md:items-start">
              <picture>
                <IconBudgeting></IconBudgeting>
              </picture>
              <h3 className="text-xl text-primary-1">Simple Budgeting</h3>
              <p>
                See exactly where your money goes each month. Receive
                notifications when you’re close to hitting your limits.
              </p>
            </article>
            <article className="flex flex-col items-center gap-4 md:items-start">
              <picture>
                <IconOnboarding></IconOnboarding>
              </picture>
              <h3 className="text-xl text-primary-1">Fast Onboarding</h3>
              <p>
                We don’t do branches. Open your account in minutes online and
                start taking control of your finances right away.
              </p>
            </article>
            <article className="flex flex-col items-center gap-4 md:items-start">
              <picture>
                <IconAPI></IconAPI>
              </picture>
              <h3 className="text-xl text-primary-1">Open API</h3>
              <p>
                Manage your savings, investments, pension, and much more from
                one account. Tracking your money has never been easier.
              </p>
            </article>
          </div>
        </section>
        <section className="flex flex-col items-center gap-8 bg-neutral-3 px-8 py-12 md:items-start  md:px-16">
          <h2 className="text-2xl text-primary-1">Latest Articles</h2>

          <div className="flex flex-col items-center gap-8 bg-neutral-3 md:flex-row md:items-stretch">
            <article className="overflow-hidden rounded-lg bg-neutral-4">
              <picture className="md:h-96">
                <img
                  src={imgCurrency}
                  alt=""
                  className="w-full object-contain md:h-[200px] md:object-cover"
                />
              </picture>
              <div className="flex flex-col gap-4 p-4">
                <span className="text-sm font-light">By Claire Robinson</span>
                <h4 className="text-xl text-primary-1 hover:text-primary-2">
                  Receive money in any currency with no fees
                </h4>
                <p>
                  The world is getting smaller and we’re becoming more mobile.
                  So why should you be forced to only receive money in a single
                  …
                </p>
              </div>
            </article>
            <article className="overflow-hidden rounded-lg bg-neutral-4">
              <picture>
                <img
                  src={imgRestaurant}
                  alt=""
                  className="w-full object-contain md:h-[200px] md:object-cover"
                />
              </picture>
              <div className="flex flex-col gap-4 p-4">
                <span className="text-sm font-light">By Wilson Hutton</span>
                <h4 className="text-xl text-primary-1 hover:text-primary-2">
                  Treat yourself without worrying about money
                </h4>
                <p>
                  Our simple budgeting feature allows you to separate out your
                  spending and set realistic limits each month. That means you …
                </p>
              </div>
            </article>
            <article className="overflow-hidden rounded-lg bg-neutral-4">
              <picture>
                <img
                  src={imgPlane}
                  alt=""
                  className="w-full object-contain md:h-[200px] md:object-cover"
                />
              </picture>
              <div className="flex flex-col gap-4 p-4">
                <span className="text-sm font-light">By Wilson Hutton</span>
                <h4 className="text-xl text-primary-1 hover:text-primary-2">
                  Take your Easybank card wherever you go
                </h4>
                <p>
                  We want you to enjoy your travels. This is why we don’t charge
                  any fees on purchases while you’re abroad. We’ll even show you
                  …
                </p>
              </div>
            </article>
            <article className="overflow-hidden rounded-lg bg-neutral-4">
              <picture>
                <img
                  src={imgConfetti}
                  alt=""
                  className="w-full object-contain md:h-[200px] md:object-cover"
                />
              </picture>
              <div className="flex flex-col gap-4 p-4">
                <span className="text-sm font-light">By Claire Robinson</span>
                <h4 className="text-xl text-primary-1 hover:text-primary-2">
                  Our invite-only Beta accounts are now live!
                </h4>
                <p>
                  After a lot of hard work by the whole team, we’re excited to
                  launch our closed beta. It’s easy to request an invite through
                  the site ...
                </p>
              </div>
            </article>
          </div>
        </section>
      </main>
      <footer className="flex flex-col items-center gap-8 bg-primary-1 p-8 text-neutral-4 md:flex-row md:justify-between md:px-16">
        <div className="flex flex-col items-center gap-8 md:flex-row md:gap-16">
          <div className="flex flex-col items-center gap-8">
            <picture className="text-neutral-4">
              <IconLogo></IconLogo>
            </picture>
            <ul className="flex flex-row gap-4">
              <li className="hover:text-primary-2">
                <a href="#">
                  <IconFacebook></IconFacebook>
                </a>
              </li>
              <li className="hover:text-primary-2">
                <a href="#">
                  <IconYoutube></IconYoutube>
                </a>
              </li>
              <li className="hover:text-primary-2">
                <a href="#">
                  <IconTwitter></IconTwitter>
                </a>
              </li>
              <li className="hover:text-primary-2">
                <a href="#">
                  <IconPinterest></IconPinterest>
                </a>
              </li>
              <li className="hover:text-primary-2">
                <a href="#">
                  <IconInstagram></IconInstagram>
                </a>
              </li>
            </ul>
          </div>
          <div className="flex flex-col items-center gap-8 md:flex-row md:gap-16">
            <ul className="flex flex-col items-center gap-2 text-neutral-3 md:items-start">
              <li className="hover:text-primary-2">
                <a href="#">About Us</a>
              </li>
              <li className="hover:text-primary-2">
                <a href="#">Contact</a>
              </li>
              <li className="hover:text-primary-2">
                <a href="#">Blog</a>
              </li>
            </ul>
            <ul className="flex flex-col items-center gap-2 text-neutral-3  md:items-start">
              <li className="hover:text-primary-2">
                <a href="#">Careers</a>
              </li>
              <li className="hover:text-primary-2">
                <a href="#">Support</a>
              </li>
              <li className="hover:text-primary-2">
                <a href="#">Privacy Policy</a>
              </li>
            </ul>
          </div>
        </div>

        <div className="flex flex-col items-center gap-4">
          <Button className="rounded-3xl bg-gradient-to-r from-primary-2 to-primary-3 px-6 py-2 text-neutral-4 hover:from-primary-2/60 hover:to-primary-3/60">
            Request Invite
          </Button>
          <span className="text-neutral-1">
            © Easybank. All Rights Reserved
          </span>
        </div>
      </footer>
    </>
  );
}

export default App;
