import { useForm } from 'react-hook-form';
import './App.css';
const Input = ({register, name, required}) => (
  <>
    <input {...register(name, {required})}/>
  </>
);
// const Select = ({ name, arr, register, required }) => (
//  <>
//     <select {...register(name, {required})}>
//       {
//         arr.map((item, index)=>{
//           return(<option key={item.key}>{item.value}</option>)
//         })
//       }
//     </select>
//   </>
// );
const Select = ({}) => {
  return(
    <select type="select">
      <option value="10">10</option>
      <option value="20">20</option>
    </select>
  )
}
function Reusable() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const arr = [{
    "key":20, "value":20,
    "key":30, "value":30,
  }]

  return (
    <div className='outer-form'>
        <div className='inner-form'>
          <form onSubmit={handleSubmit((data) => console.log(data))}>
            <Input name="FirstName" register={register} required="true"/>
            {errors.FirstName && <span>Name Required</span>}
            {/* <Select label="Age" register={register} required="true" arr={arr}/> */}
            <Select/>
            <input type="submit" />
          </form>
        </div>
    </div>
  );
}

export default Reusable;
