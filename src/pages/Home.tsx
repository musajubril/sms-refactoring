import React from "react";
import Button from "../components/Buttons/Button";
import IconButton from "../components/Buttons/IconButton";
import SchoolLayout from "../components/Layouts/school.layout";
import {FaUserNinja} from "react-icons/fa"
import Status from "../components/Status";
import Input from "../components/FormFields/Input";
import InputIcon from '../components/FormFields/InputIcon';
import TextArea from "../components/FormFields/TextArea";
import StatCard from "../components/StatCard";

export default function Home() {
  return (
    <SchoolLayout>
      <div>Home</div>
      <div className="flex gap-8 items-center">
      <Button size="sm" value="Button" click={()=>{}} location='end' disabled={false} type={"button"} />
      <Button size="md" value="Button" click={()=>{}} location='end' disabled={false} type={"button"} />
      <Button size="lg" value="Button" click={()=>{}} location='end' disabled={false} type={"button"} />
      </div>
      <div className="flex gap-8 items-center pt-2">
      <IconButton Icon={FaUserNinja} size="sm" value="Button" click={()=>{}} location='end' disabled={false} type={"button"} />
      <IconButton Icon={FaUserNinja} size="md" value="Button" click={()=>{}} location='end' disabled={false} type={"button"} />
      <IconButton Icon={FaUserNinja} size="lg" value="Button" click={()=>{}} location='end' disabled={false} type={"button"} />
      </div>
      <div className="pt-5">
        <Status status="pending" value="Debtor" />
      </div>
      <div className="pt-5">
        <Input value={""} type="text" required={true} change={()=>{}} label="Enter Full Name" id="test" placeholder="Enter Full Name" description="Enter your full name that will be on ur profile" disabled={false} />
      </div>
      <div className="pt-5">
        <InputIcon value={""} type="text" required={true} change={()=>{}} label="Enter Full Name" id="test" placeholder="Enter Full Name" description="Enter your full name that will be on ur profile" Icon={FaUserNinja} disabled={false} />
      </div>
      <div className="pt-5">
        <TextArea value={""} required={true} change={()=>{}} label="Enter Full Name" id="test"  description="Enter your full name that will be on ur profile" placeholder="testing" disabled={true} />
      </div>
      <div className="pt-5 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
        {
          ["","","","","","","","","","","","","","","","",""].map(()=>(
            <StatCard title="Total Income" value="5000" />
          ))
        }
      </div>
    </SchoolLayout>
  );
}
