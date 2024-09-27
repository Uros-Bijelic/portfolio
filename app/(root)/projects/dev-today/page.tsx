'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';

import { TracingBeam } from '@/components/ui/TracingBeam';
import { GIT_NOTE_ICONS } from '@/constants';

// ----------------------------------------------------------------

const DevTodayPage = () => {
  return (
    <section className="page-wrapper">
      <div className="px-5">
        <TracingBeam>
          <div className="flex-center mx-auto mb-10 flex max-w-[700px] flex-col gap-4 px-2">
            <h1 className="h1-semi">
              DevToday - A content creation platform for developers
            </h1>
            <p className="p4-medium text-center">
              DevToday is a content creation platform for developers. It offers
              a feed of dev news, podcasts, and events, keeping you up-to-date
              with the latest tech. It has interactive features like podcast
              audio playback, meetup maps, and more. You can think of it as the
              go-to developer community hub.
            </p>
          </div>
          <div className="relative mb-16 h-[500px] w-full">
            <Image
              src="/assets/images/dev-today.svg"
              alt="Dev Today Desktop"
              fill
              className="rounded-xl object-cover"
            />
          </div>
          <div className=" flex flex-col gap-14">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 1 }}
              className="flex flex-col gap-3.5"
            >
              <h4 className="h4-bold">Overview</h4>
              <p className="p-medium">
                DevToday is a content creation platform for developers. It
                offers a feed of dev news, podcasts, and events, keeping you
                up-to-date with the latest tech. It has interactive features
                like podcast audio playback, meetup maps, and more. You can
                think of it as the go-to developer community hub. Users can
                effortlessly log in or sign up, ensuring quick access to their
                accounts. Profile management is intuitive, allowing users to
                easily update their details and link social media accounts for
                improved connectivity. In additon to creating a post, meet-up or
                podcast, users can explore related post, meet-ups and podcast
                effortlessly. The powerful search and filter capabilities enable
                swift post retrieval through global search options and specific
                filtering criteria. Whichever collection a user desires, the
                results are streamlined with pagination features, making
                exploration simple and organized.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 1 }}
              className="flex flex-col gap-3.5"
            >
              <h4 className="h4-bold">Problem</h4>
              <p className="p-medium">
                We needed to create a extensive content creation platform
                tailored for developers, which solved several challenges that
                held back user engagement and content accessibility. Offering
                features for creating posts, meetups, podcasts, and groups.
                Ensure users don&apos;t struggle with a complex login and
                sign-up process and inefficient profile management. Have a
                streamlined system for organizing related content and an
                effective tagging mechanism which simplifies content discovery
                and retrieval. Additionally, have appropriate search and
                filtering possibilities, along with organized content navigation
                with pagination, enabling users to efficiently find and explore
                desireble content. The platform should have a responsive design
                affective across different devices, while its code architecture
                should be modular and reusable, allowing easily updating and
                maintaining.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 1 }}
              className="flex flex-col gap-3.5"
            >
              <h4 className="h4-bold">Tech Stack</h4>
              <ul className="flex flex-wrap gap-4">
                {GIT_NOTE_ICONS.map((icon) => (
                  <li
                    key={icon}
                    className="flex-center size-[93px] rounded-full bg-[#242938]"
                  >
                    <Image
                      src={`/assets/icons/tech-stack/${icon}.svg`}
                      width={46}
                      height={46}
                      alt={icon}
                    />
                  </li>
                ))}
              </ul>
            </motion.div>
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 1 }}
              className="flex flex-col gap-3.5"
            >
              <h4 className="h4-bold">Reflection</h4>
              <p className="p-medium">
                The journey of developing DevToday has been both challenging and
                rewarding. We addressed a prevalent problem of finding a
                reliable and user-friendly platform for developers around the
                world. The dynamic homepage and user-friendly listing and
                details pages reflect our commitment to creating an application
                that is not only functional but also visually engaging. Working
                with the Next.js and Node.js allowed us to integrate seamlessly,
                resulting in a robust and responsive platform.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 1 }}
            >
              <Link
                href="https://dev-today.urosbijelic.com"
                target="_blank"
                className="flex flex-col gap-3.5"
              >
                <div>
                  <h4 className="h4-bold mb-2">Final Site</h4>
                  <div className="flex gap-2 text-blue-500">
                    Dev Today
                    <Image
                      src="/assets/icons/link-arrow.svg"
                      width={20}
                      height={20}
                      alt="Arrow"
                    />
                  </div>
                </div>

                <div className="flex-center relative mt-4 w-full flex-1 rounded-lg">
                  <Image
                    src="/assets/images/dev-today-desk-mob.svg"
                    alt="Gitnote Desktop"
                    width={742}
                    height={350}
                  />
                </div>
              </Link>
              <div className="flex flex-col gap-2 pt-4 text-blue-500">
                <Link
                  href="https://github.com/urke90/Dev-Today-FE"
                  target="_blank"
                >
                  Frontend code on Github - github.com/urke90/Dev-Today-FE
                </Link>
                <Link
                  href="https://github.com/urke90/Dev-Today-BE"
                  target="_blank"
                >
                  Backend code on Github - github.com/urke90/Dev-Today-BE
                </Link>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 1 }}
              className="flex flex-col gap-3.5"
            >
              <h4 className="h4-bold">Learnings</h4>
              <ul className="flex flex-col gap-6">
                <li className="p-medium">
                  1. Gained extensive knowledge of full authentication and
                  authorization implementation, including the use of
                  industry-standard security protocols such as JSON Web Tokens.
                </li>
                <li className="p-medium">
                  2. Improved my backend skills, specifically in optimizing
                  database queries, improving performance, and handling
                  server-side logic.
                </li>
                <li className="p-medium">
                  3. Learned how to properly handle files, including file
                  upload, storage, and retrieval, ensuring that the app&apos;s
                  data is organized & easily accessible while keeping it secure.
                </li>
                <li className="p-medium">
                  4. Collaborative efforts on GitHub fostered better project
                  management practices and enhanced my ability to work
                  efficiently in a team environment.
                </li>
                <li className="p-medium">
                  5. Implemented Next Clerk for smooth user experience and
                  advanced security.
                </li>
              </ul>
            </motion.div>
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 1 }}
              className="flex flex-col gap-3.5"
            >
              <h4 className="h4-bold">Challenges</h4>
              <ul className="flex flex-col gap-6">
                <li className="p-medium">
                  1. Integrating and managing diverse types of content creation
                  features such as posts, meet-ups, podcasts, and group
                  functionalities demanded intricate backend architecture and
                  seamless frontend interactions.
                </li>
                <li className="p-medium">
                  2. We conducted brainstorming and carefully weighed our
                  options before making a decision. Furthermore, optimizing
                  search and filtering functionalities to swiftly retrieve
                  specific content across a growing database posed scalability
                  and performance challenges.
                </li>
                <li className="p-medium">
                  3. Organize backend in a way to reuse as many routes as
                  possible with keeping the code simple, maintainable and easy
                  to debug
                </li>
                <li className="p-medium">
                  4. Working with many third party libraries, composing them
                  into single app, while having clean and maintainable code and
                  highly optimized application
                </li>
                <li className="p-medium">
                  5. Collaborated effectively to overcome different obstacles
                  and ultimately delivered a high-quality product within the
                  given timeline.
                </li>
              </ul>
            </motion.div>
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 1 }}
              className="flex flex-col gap-3.5"
            >
              <h4 className="h4-bold">Future</h4>
              <p className="p-medium">
                Looking ahead, I&apos;m really excited to see how DevToday will
                grow in developers community. It has a great potential to grow
                even more with adding many new features which could help
                developers around the world get in touch, share their ides and
                create new contents around which they will gather.
              </p>
            </motion.div>
          </div>
        </TracingBeam>
      </div>
    </section>
  );
};

export default DevTodayPage;
