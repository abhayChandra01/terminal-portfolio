export const commands = [
    {
        id: 0,
        command: 'sudo -help',
        answer: <div>
            Following is a list of commands available :
            <ul className="list-disc">
                <li className="ml-[20px]">
                    <p className="font-semibold">sudo developer -info</p>
                    <p className="italic">Get the basic info about the developer who built this.</p>
                </li>
                <li className="ml-[20px]">
                    <p className="font-semibold">sudo brief -info</p>
                    <p className="italic">Get a brief intro of the developer.</p>
                </li>
                <li className="ml-[20px]">
                    <p className="font-semibold">sudo website -info</p>
                    <p className="italic">Get the innovation and tools used to build this website.</p>
                </li>
                <li className="ml-[20px]">
                    <p className="font-semibold">sudo skills -all</p>
                    <p className="italic">Get the skillset of the developer.</p>
                </li>
            </ul>
        </div>
    },
    {
        id: 1,
        command: 'sudo developer -info',
        answer: <p className="font-medium text-md" >
            Abhay Chandra (Software Engineer at Xelp)
        </p>
    },
    {
        id: 2,
        command: 'sudo brief -info',
        answer: <p>
            I am a <span className="text-[#00fff3e0] italic" >Software Engineer</span> at Xelpmoc Design And Tech Ltd, Bangalore.<br />
            I belong to Shahjahanpur, Uttar Pradesh. I did my schooling from <span className="text-[#00fff3e0] italic" >CBSE Board</span> & completed <span className="text-[#00fff3e0] italic" >Bachelor Of Technology (19-23)</span> from ITM Gwalior in the field of <span className="text-[#00fff3e0] italic" >Information Technology</span>.
            I am a passionate developer seeking a challenging position in a renowned organization that values learning, growth, and innovation, so that I can expand my skillset.<br />
            Proficient in <span className="text-[#00fff3e0] italic" >React.js</span>.<br />
            As a highly self-motivated web developer, I thrive on building web applications and continuously expanding my skills with the latest technologies to create meaningful and innovative solutions.
        </p>
    },
    {
        id: 3,
        command: 'sudo skills -all',
        answer: <div>
            <p className="text-[#00fff3e0] italic">Tech Stacks :</p>
            <ul className="list-disc">
                <li className="ml-[20px]">
                    <p className="font-semibold">React.js</p>
                </li>
                <li className="ml-[20px]">
                    <p className="font-semibold">Redux.js Toolkit</p>
                </li>
                <li className="ml-[20px]">
                    <p className="font-semibold">Next.js</p>
                </li>
                <li className="ml-[20px]">
                    <p className="font-semibold">Node.js</p>
                </li>
            </ul>
            <p className="text-[#00fff3e0] italic">Languages :</p>
            <ul className="list-disc">
                <li className="ml-[20px]">
                    <p className="font-semibold">Javascript</p>
                </li>
                <li className="ml-[20px]">
                    <p className="font-semibold">HTML/CSS</p>
                </li>
                <li className="ml-[20px]">
                    <p className="font-semibold">C</p>
                </li>
                <li className="ml-[20px]">
                    <p className="font-semibold">C++</p>
                </li>
            </ul>
            <p className="text-[#00fff3e0] italic">Databases :</p>
            <ul className="list-disc">
                <li className="ml-[20px]">
                    <p className="font-semibold">MySQL</p>
                </li>
                <li className="ml-[20px]">
                    <p className="font-semibold">MongoDB</p>
                </li>
                <li className="ml-[20px]">
                    <p className="font-semibold">Firebase</p>
                </li>
            </ul>
        </div>
    },
    {
        id: 4,
        command: 'sudo website -info',
        answer: <p>
            Imagining a unique portfolio website, <span className="text-[#00fff3e0] italic">Abhay</span> designed an innovative concept that mimics a terminal window. Users can input specific commands to view different information, making the experience both interactive and engaging. <br />
            The website was built from <span className="text-[#00fff3e0] italic">scratch</span>, primarily using <span className="text-[#00fff3e0] italic">Next.js</span> and <span className="text-[#00fff3e0] italic">TailwindCSS</span>, with <span className="text-[#00fff3e0] italic">react-icons</span> enhancing the visual elements.<br />
            <span className="text-[#00fff3e0] italic">Vercel</span> serves as the reliable hosting platform for this creatively designed project.
        </p>
    }


]