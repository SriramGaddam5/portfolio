import Image from "next/image";
import { Box, Heading, Text, List, Link as ChakraLink } from "@chakra-ui/react";

const HowToGetJobContent = () => {
  return (
    <Box color="gray.300">
      <Heading as="h2" size="xl" mt={6} mb={4}>
        Applying
      </Heading>
      <Text mb={4}>
        Apply to at least 500 positions. It seems like a lot, but it isn&apos;t.
        It&apos;s a numbers game. You can apply to 1000-2000 and still only get
        a few offers, roughly 0.1% chance of getting an offer. Apply early,
        apply now.
      </Text>
      <Text mb={4}>
        There are different times to apply for internships in the summer or
        fall/spring.
      </Text>
      <Text mb={4}>There are a few hurdles to pass to get a job:</Text>
      <List.Root as="ol" ml={6} mb={6}>
        <List.Item>Resume screening</List.Item>
        <List.Item>Online assessment</List.Item>
        <List.Item>Interviews</List.Item>
        <List.Item>Behavioral interview</List.Item>
        <List.Item>Technical interview</List.Item>
      </List.Root>

      <Heading as="h3" size="lg" mt={6} mb={3}>
        Resume
      </Heading>
      <Text mb={4}>
        First you need to pass a resume screening. But how? You need a good
        resume. Don&apos;t be afraid to exaggerate. List high school stuff if
        you don&apos;t have anything. Use{" "}
        <ChakraLink
          href="https://latexresu.me"
          color="blue.400"
          target="_blank"
          rel="noopener noreferrer"
        >
          latexresu.me
        </ChakraLink>{" "}
        to create a template if you don&apos;t have a resume yet or use it as a
        guideline.
      </Text>

      <Heading as="h3" size="lg" mt={6} mb={3}>
        Confusing role titles - is it tech?
      </Heading>
      <Text mb={4}>
        Apply to any position even if it doesn&apos;t seem like a software or
        tech role, the title of the role can be misleading. Better to apply then
        to miss out on a potential offer. These types of positions can also be
        skipped by other applicants since they don&apos;t look like tech roles,
        increasing your chances of getting in since a lower number of applicants
        would apply to that role.
      </Text>

      <Heading as="h3" size="lg" mt={6} mb={3}>
        How to apply fast
      </Heading>

      <Heading as="h4" size="md" mt={4} mb={2}>
        Simplify.jobs
      </Heading>
      <Text mb={4}>
        Download the Simplify.jobs chrome extension here:{" "}
        <ChakraLink
          href="https://simplify.jobs/install"
          color="blue.400"
          target="_blank"
          rel="noopener noreferrer"
        >
          simplify.jobs/install
        </ChakraLink>
        . This uses AI to automate your application process. Helpful to autofill
        your resume and other info you don&apos;t want to type again and again.
        They also have job lists:{" "}
        <ChakraLink
          href="https://github.com/SimplifyJobs/Summer2025-Internships"
          color="blue.400"
          target="_blank"
          rel="noopener noreferrer"
        >
          github.com/SimplifyJobs/Summer2025-Internships
        </ChakraLink>
      </Text>

      <Heading as="h4" size="md" mt={4} mb={2}>
        Otta (Welcome to the Jungle)
      </Heading>
      <Text mb={4}>
        Another popular job website with a great onboarding process. You can
        find them here:{" "}
        <ChakraLink
          href="https://app.otta.com"
          color="blue.400"
          target="_blank"
          rel="noopener noreferrer"
        >
          app.otta.com
        </ChakraLink>
      </Text>

      <Heading as="h4" size="md" mt={4} mb={2}>
        Keyboard Shortcuts
      </Heading>
      <Text mb={4}>
        A lot of the navigation of the job application can be automated without
        using your mouse. Checkboxes can be checked with the spacebar or enter,
        use tab to navigate to the next element, shift + tab to go to the
        previous element, type the first letter to automatically select the
        first occurrence of that item in a dropdown list, etc. Turn on clipboard
        history with Win + V and paste things that Simplify.jobs can&apos;t
        automate.
      </Text>
      <Text mb={4}>
        For example, when applying to all tech roles in a company using Workday
        for their application memorize where you need to click, spam click in
        places where the button didn&apos;t load yet so the instant it loads you
        already clicked on it, memorize the work authorization dropdowns for US
        citizenship and other parts of the application which are the same or
        similar for all job listings, wait for the date to load then go to the
        next page, etc.
      </Text>

      <Heading as="h2" size="xl" mt={8} mb={4}>
        Online Assessments
      </Heading>
      <Text mb={4}>
        Some of these online assessments aren&apos;t proctored so use all the
        resources you have available. Use a second computer/monitor, a friend,
        share your screen, etc. But don&apos;t make it obvious.
      </Text>

      <Heading as="h2" size="xl" mt={8} mb={4}>
        Technical Interview
      </Heading>
      <Text mb={4}>
        Solving LeetCode problems is a common way to learn DSA (Data Structures
        and Algorithms). If you don&apos;t know how to code, learn Python.
        Python is the most beginner friendly programming language and once you
        learn the basics of one programming it&apos;s much easier to learn other
        programming languages. Don&apos;t worry too much about choosing which
        programming language to learn when beginning.
      </Text>
      <Text mb={4}>
        These interviews are usually 45 minutes and you may be asked 1-2
        technical questions with about 15 minutes per question. Explain your
        thought process and how you approach the problem. Make sure to add
        comments to your code. The interviewer may ask you to do the problem in
        a different way or add a new restriction to the problem changing the way
        you would solve it. The point of the interview isn&apos;t just your raw
        technical skill and your ability to solve the problem but more about how
        you approach the problem and problem solve in general.
      </Text>
      <Text mb={4}>
        Solving these vague abstract problems may seem like a waste of time.
        They may seem not important since most likely you won&apos;t use DSA
        concepts on the job but more like make a button bigger or change the
        color of a background. But the point of learning DSA is showing that you
        can put the time and effort into learning something useless (can be
        useful in certain cases though).
      </Text>

      <List.Root as="ul" ml={6} mb={6} gap={3}>
        <List.Item>
          Practice LeetCode problems here:{" "}
          <ChakraLink
            href="https://leetcode.com/problemset"
            color="blue.400"
            target="_blank"
            rel="noopener noreferrer"
          >
            leetcode.com/problemset
          </ChakraLink>
          . If you don&apos;t want to pay for premium use{" "}
          <ChakraLink
            href="https://lintcode.com"
            color="blue.400"
            target="_blank"
            rel="noopener noreferrer"
          >
            lintcode.com
          </ChakraLink>{" "}
          to solve premium problems
        </List.Item>

        <List.Item>
          NeetCode has a youtube channel and website where he explains his
          approach and solutions to many LeetCode problems. Solving LeetCode
          problems can be intimidating, start here if you don&apos;t know where
          to begin.
          <List.Root as="ul" ml={6} mt={2}>
            <List.Item>
              His youtube channel:{" "}
              <ChakraLink
                href="https://youtube.com/@NeetCode"
                color="blue.400"
                target="_blank"
                rel="noopener noreferrer"
              >
                youtube.com/@NeetCode
              </ChakraLink>
            </List.Item>
            <List.Item>
              Website:{" "}
              <ChakraLink
                href="https://neetcode.io"
                color="blue.400"
                target="_blank"
                rel="noopener noreferrer"
              >
                neetcode.io
              </ChakraLink>
            </List.Item>
          </List.Root>
        </List.Item>

        <List.Item>
          Abdul Bari has great explanations about DSA
          <List.Root as="ul" ml={6} mt={2}>
            <List.Item>
              <ChakraLink
                href="https://youtube.com/@abdul_bari"
                color="blue.400"
                target="_blank"
                rel="noopener noreferrer"
              >
                youtube.com/@abdul_bari
              </ChakraLink>
            </List.Item>
          </List.Root>
        </List.Item>

        <List.Item>
          If you want to learn Web development,{" "}
          <ChakraLink
            href="https://theodinproject.com"
            color="blue.400"
            target="_blank"
            rel="noopener noreferrer"
          >
            theodinproject.com
          </ChakraLink>{" "}
          is a great place to begin
        </List.Item>

        <List.Item>
          If you want to learn Python, reading Al Sweigart&apos;s{" "}
          <ChakraLink
            href="https://automatetheboringstuff.com"
            color="blue.400"
            target="_blank"
            rel="noopener noreferrer"
          >
            automatetheboringstuff.com
          </ChakraLink>{" "}
          is a practical way to apply your newfound programming skills.
        </List.Item>

        <List.Item>
          The Blind 75 is a popular list of 75 common LeetCode questions that
          teach you the basics of different types of programming questions.{" "}
          <ChakraLink
            href="https://teamblind.com/post/New-Year-Gift---Curated-List-of-Top-75-LeetCode-Questions-to-Save-Your-Time-OaM1orEU"
            color="blue.400"
            target="_blank"
            rel="noopener noreferrer"
          >
            Blind 75 List
          </ChakraLink>
        </List.Item>

        <List.Item>
          Helpful ordered question list to start learning by topic{" "}
          <ChakraLink
            href="https://seanprashad.com/leetcode-patterns"
            color="blue.400"
            target="_blank"
            rel="noopener noreferrer"
          >
            seanprashad.com/leetcode-patterns
          </ChakraLink>
        </List.Item>
      </List.Root>

      <Heading as="h2" size="xl" mt={8} mb={4}>
        Behavioral Interview
      </Heading>
      <Text mb={4}>
        You are asked the same questions again and again in interviews. If you
        write down responses for all these questions, you&apos;ll have a good
        answer bank to practice for non-technical interviews. Remember to be
        confident and to seem really interested in the company. Do some research
        before the interview to learn more about the company. Really try to make
        a connection with your interviewer. Don&apos;t talk too fast and
        don&apos;t be afraid to ask for time to think about responses.
      </Text>
      <Text mb={4}>
        You have to get a bit lucky to get a good interviewer, but you
        can&apos;t change that. The only thing that you can change is yourself,
        so by preparing well you reduce the amount of luck you need to pass.
      </Text>

      <Heading as="h3" size="lg" mt={6} mb={3}>
        Questions the interviewer may ask
      </Heading>
      <List.Root as="ul" ml={6} mb={6} gap={2}>
        <List.Item>Tell me about yourself</List.Item>
        <List.Item>
          Make sure to have some sort of story here. You can start with the
          format of &quot;Hi, my name is Johnny Appleseed, a junior Computer
          Science major at Apple Tree University.&quot; List some technologies
          you know and your previous related experience.
        </List.Item>
        <List.Item>What is your greatest strength?</List.Item>
        <List.Item>What is your greatest weakness?</List.Item>
        <List.Item>What are your strengths and weaknesses?</List.Item>
        <List.Item>Why are you interested in this position?</List.Item>
        <List.Item>What do you know about our company?</List.Item>
        <List.Item>
          Name a challenge you faced and how you overcame it.
        </List.Item>
        <List.Item>
          How did you solve a dispute when working in a team?
        </List.Item>
        <List.Item>
          Describe a situation where you had to convince other people to adopt
          your ideas. What would be your approach?
        </List.Item>
        <List.Item>
          Can you explain how you overcame a difficult challenge and your
          process to overcome it?
        </List.Item>
        <List.Item>Describe how you learned from a mistake you made.</List.Item>
        <List.Item>What are your salary expectations?</List.Item>
        <List.Item>Do you have any questions for me?</List.Item>
      </List.Root>

      <Heading as="h3" size="lg" mt={6} mb={3}>
        Questions to ask the interviewer
      </Heading>
      <Text mb={4}>
        Make sure to appear interested by asking questions that you talked about
        during your interview and follow up on them. Why did you want to become
        your current position?
      </Text>
      <List.Root as="ul" ml={6} mb={6} gap={2}>
        <List.Item>Why choose this company?</List.Item>
        <List.Item>
          What is the most difficult challenge you face in your job?
        </List.Item>
        <List.Item>What does a typical intern/employee do?</List.Item>
        <List.Item>What technologies/frameworks do you use?</List.Item>
        <List.Item>How is the team structured?</List.Item>
        <List.Item>
          What are the entry-level positions or internships you recruit most
          frequently?
        </List.Item>
        <List.Item>What made you join this company?</List.Item>
        <List.Item>
          What experiences do you like to see in a candidate from their time in
          college?
        </List.Item>
      </List.Root>

      <Heading as="h2" size="xl" mt={8} mb={4}>
        Emails
      </Heading>
      <Heading as="h3" size="lg" mt={6} mb={3}>
        Remember English class?
      </Heading>
      <Text mb={4}>
        Make sure you know how to properly format emails professionally. If you
        don&apos;t know what to say, ask ChatGPT for advice. But don&apos;t copy
        paste directly from ChatGPT, use it as an example. Send follow up emails
        after interviews thanking your interviewers. This might help
        interviewers help remember you and sustain that connection.
      </Text>
      <Text mb={4}>
        Make sure to use your school email or a professional looking email.
        Don&apos;t use Xxc00ki3M0n5t3RxX@totallyrealemail.com or have a profile
        picture like this.{" "}
        <Box as="span" display="inline-block" verticalAlign="middle">
          <Image
            src="https://pbs.twimg.com/media/DX8QSGWU0AEWHRc.jpg"
            alt="Patrick Star"
            width={30}
            height={30}
            style={{ display: "inline" }}
          />
        </Box>
      </Text>
      <Text mb={4}>
        Check your email often and enable notifications on your phone. Create a
        custom label for applying to jobs to track your applications and to not
        clutter your personal inbox.
      </Text>

      <Heading as="h3" size="lg" mt={6} mb={3}>
        Reading
      </Heading>
      <Text mb={4}>
        You are going to get a lot of rejection emails, it&apos;s a part of
        life. Don&apos;t be disappointed, just drag them into your jobs email
        label and mark them as read. But how do you know if it&apos;s a
        rejection email? They usually contain phrases such as{" "}
        <i>unfortunately</i>, <i>thank you for your interest</i>,{" "}
        <i>we appreciate</i>, etc. But be careful, don&apos;t miss an invitation
        to an interview.
      </Text>

      <Heading as="h2" size="xl" mt={8} mb={4}>
        Attire
      </Heading>
      <Text mb={4}>
        Make sure to dress professionally for interviews, at least a dress
        shirt. Make sure to seem presentable letting your interviewer know that
        you care about the interview.
      </Text>

      <Heading as="h2" size="xl" mt={8} mb={4}>
        Summary
      </Heading>
      <Text mb={4}>Apply to a lot of internships and lock in.</Text>
      <Box display="flex" justifyContent="center" my={8}>
        <Image
          src="https://c.tenor.com/Tc5HlwKjZSIAAAAd/tenor.gif"
          alt='Alphabet soup spelling out "Get a job"'
          width={400}
          height={300}
          style={{ borderRadius: "8px" }}
        />
      </Box>
    </Box>
  );
};

export default HowToGetJobContent;
