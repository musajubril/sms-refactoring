type SchoolData = {
        logo: string;
        name: string;
        title: any
}
export const MobileFormImage =({logo, name, title}: SchoolData)=>{
    return (
        <div className="sm:mx-auto sm:w-full sm:max-w-md">
            <img
              className="w-auto h-auto mx-auto sm:hidden"
              src={logo}
              alt="Workflow"
            />
            <h2 className="mt-6 text-3xl font-extrabold text-center text-gray-900">
              {name}
            </h2>
            <h2 className="mt-1 text-3xl font-extrabold text-center text-gray-900">
              {title}
            </h2>
          </div>
    )
}
export const WebFormImage = ({logo}: {logo: SchoolData['logo']}) => {
    return (
        <div className="hidden col-span-1 sm:my-auto sm:mx-auto sm:block">
          <img
            src={logo}
            alt=""
            className="transition-all transform hover:scale-105 hover:-translate-y-3 "
            />
        </div>
            )
}