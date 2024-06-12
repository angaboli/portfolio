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
          <div className="mb-10 text-center">
            <h2 className="title">My Professional Journey</h2>
          </div>
        </div>
      </div>
      <div className="min-h-screen flex flex-col justify-center">
        <div className="py-3 sm:max-w-xl sm:mx-auto w-full px-2 sm:px-0">
          <div className="relative antialiased text-sm">
            <div className="hidden sm:block w-1 bg-accent bg-gradient-to-b from-accent to-bkgEnd absolute h-full left-1/2 transform -translate-x-1/2"></div>
            {resumeData.map((item, index) => (
              <div className={`mt-6 sm:mt-0 sm:mb-12`} key={index}>
                <div className="flex flex-col sm:flex-row items-center">
                  <div className={`flex ${index % 2 === 0 ? 'justify-start' : 'justify-end'} w-full mx-auto items-center`}>
                    <div className={`w-full sm:w-1/2 ${index % 2 === 0 ? 'sm:pr-8' : 'sm:pl-8'}`}>
                      <div className="p-4 bg-bkgStart rounded-md shadow-md">
                        <h3 className="font-semibold text-secondary text-md mb-1">{item.title} - {item.company}</h3>
                        <div className='flex justify-between'>
                          <span className='text-xs font-light'>{item.location}</span>
                          <time className="text-xs font-light text-primary">{item.date}</time>
                        </div>
                        {
                          item.description.length > 1 &&
                          <ul className="mt-2 list-disc list-outsite ml-4">
                            {item.description.map((desc, i) => (
                              <li key={i} className="text-primary font-normal">{desc}</li>
                            ))}
                          </ul>
                        }
                      </div>
                    </div>
                  </div>
                  <div className="rounded-full bg-accent border-primary border-2 w-8 h-8 absolute left-1/2 -translate-y-4 sm:translate-y-0 transform -translate-x-1/2 flex items-center justify-center">
                    {getSvgIcon(item.type)}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}