'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';

// import { TracingBeam } from '@/components/ui/TracingBeam';
// https://github.com/framer/motion/issues/441
import { TracingBeam } from '@/components/ui/TracingBeam';
import { GIT_NOTE_ICONS } from '@/constants';

// ----------------------------------------------------------------

const GitnotePage = () => {
  return (
    <section className="page-wrapper">
      <div className="px-5">
        <TracingBeam>
          <div className="flex-center mx-auto mb-10 flex max-w-[700px] flex-col gap-4 px-2">
            <h1 className="h1-semi">
              GitNote - A knowledge repository for Developers
            </h1>
            <p className="p4-medium text-center">
              With its innovative features and continuous improvement efforts,
              GitNote is poised to revolutionize workflow and knowledge
              management for users worldwide
            </p>
          </div>
          <div className="relative mb-16 h-[500px] w-full">
            <Image
              src="/assets/images/git-note.svg"
              alt="Gitnote Desktop"
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
                GitNote is a powerful application designed to streamline your
                workflow, enhance knowledge management, and facilitate code
                snippet storage. GitNote offers a seamless user experience with
                server-side searching, pagination, and a recommendation system.
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
                Traditional note-taking and code storage methods often lack
                organization and collaboration features, leading to
                inefficiencies and information silos. GitNote addresses these
                challenges by providing a centralized platform for tracking
                workflow, storing knowledge, and sharing code snippets.
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
                GitNote helps you keep track of your ideas and code snippets,
                making your work smoother and more efficient. It&apos;s great
                for many people.Developers can easily manage projects, save
                important code bits for later, and document their work
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 1 }}
            >
              <div>
                <Link
                  href="https://github-note.urosbijelic.com/"
                  className="mb-2 flex flex-col gap-3.5"
                  target="_blank"
                >
                  <div>
                    <h4 className="h4-bold mb-2">Final Site</h4>
                    <div className="flex gap-2 text-blue-500">
                      Git Note
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
                      src="/assets/images/git-note-desk-mob.svg"
                      alt="Gitnote Desktop"
                      width={742}
                      height={350}
                    />
                  </div>
                </Link>
                <div className="pt-4 text-blue-500">
                  <Link
                    href="https://github.com/urke90/Github-Note"
                    target="_blank"
                  >
                    Code on Github - github.com/urke90/Github-Note
                  </Link>
                </div>
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
                  1. Frontend Development: Mastering Next.js and Tailwind CSS
                  with Shadcn for building responsive and performant web
                  applications.
                </li>
                <li className="p-medium">
                  2. Backend Integration: Implementing server-side searching
                  with filtering and pagination for optimizing user experience.
                </li>
                <li className="p-medium">
                  3. UX Design: Designing intuitive interfaces and seamless
                  workflows to enhance user experience
                </li>
                <li className="p-medium">
                  4. Form Handling: Utilizing the React Hook Form library with
                  Zod for efficient form management, ensuring smooth data
                  handling and validation processes.
                </li>
                <li className="p-medium">
                  5. Implementing Next-Auth for authentication and enhanced user
                  security
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
                  1. Establish MongoDB database integration within Next.js Node
                  and Edge Runtimes, structuring data storage for knowledge,
                  code snippets, and workflow management and connecting to Next
                  Auth
                </li>
                <li className="p-medium">
                  2. Implement secure user authentication mechanisms to manage
                  access and protect user data.
                </li>
                <li className="p-medium">
                  3. Create intuitive filtering options to allow users to
                  categorize and sort their knowledge repository efficiently.
                </li>
                <li className="p-medium">
                  4. Develop a powerful search feature to enable users to
                  quickly locate relevant information within their knowledge
                  base.
                </li>
                <li className="p-medium">
                  5. Optimize application performance for fast loading times and
                  smooth user experience, particularly with large datasets.
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
                Looking ahead, I&apos;m really excited about what&apos;s next
                for GitNote. It&apos;s more than just a tool to help me stay
                organized; it&apos;s changing the way I work and grow as a
                developer.
              </p>
            </motion.div>
          </div>
        </TracingBeam>
      </div>
    </section>
  );
};

export default GitnotePage;
