type Projects = {
  title: String,
  desc: String,
  link: string,
  deploy: string
}

export default function Projectcard({ title, desc, link, deploy }: Projects) {
  const handleButtonClick = (externalLink: string) => {
    window.location.href = externalLink;
  };


  return <div>
    <div className="p-5">

      <h2 className="scroll-m-20 border-b pb-2 text-2xl font-semibold tracking-tight first:mt-0 text-[#698bcf]">
        {title}
      </h2>
      <div className="p-3 text-[#666d78]">
        {desc}
      </div>
      <div className="flex flex-row-reverse">
        <div className="p-2 text-[#698bcf] font-bold" onClick={() => { handleButtonClick(link) }}>
          Code
        </div>
        <div className="p-2 text-[#698bcf] font-bold" onClick={() => { handleButtonClick(deploy) }}>
          Live-Here
        </div>
      </div>
    </div>
  </div>
}
