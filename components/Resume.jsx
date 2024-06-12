import { resumeData } from '@/data/resumeData';
import { FaGraduationCap, FaSuitcase } from "react-icons/fa";

const getSvgIcon = (type) => {
  if (type === "education") {
    return <FaGraduationCap className="h-4 w-4 text-neutral place-self-center" />;
  } else if (type === "work") {
    return <FaSuitcase className="h-4 w-4 text-neutral place-self-center" />;
  }
  return null;
};

export default function Resume() {
  return (
    <div id="resume" className="container mx-auto p-4">
      <div className="flex flex-wrap">
        <div className="w-full">
          <div className="mb-10">
            <h2 className="title">Experience</h2>
          </div>
        </div>
      </div>
      <dev className="flex justify-center">
        <ul className="relative border-l border-accent">
          {resumeData.map((item, index) => (
            <li className="mb-10 ml-6" key={index}>
              <div className="absolute w-6 h-6 bg-accent rounded-full flex content-center justify-center -left-3.5 text-center border border-secondary">
                {getSvgIcon(item.type)}
              </div>
              <div className={`flex md:flex-row items-start md:items-center`}>
                <div className={`flex-1 md:ml-8 mb-4 md:mb-0`}>
                  <time className="block mb-2 text-sm font-semibold ">{item.date}</time>
                  <h3 className="text-lg font-semibold ">{item.title}</h3>
                  <h4 className="text-md  mb-2">{item.company}</h4>
                  {/* <ul className="list-disc list-inside ">
                  {item.description.map((desc, i) => (
                    <li key={i}>{desc}</li>
                  ))}
                </ul> */}
                </div>
              </div>
            </li>
          ))}
        </ul>
      </dev>
    </div>
  );
}