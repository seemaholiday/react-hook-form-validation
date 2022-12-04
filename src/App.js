import {useForm} from 'react-hook-form';
import './App.css';
function App() {

  const {register, handleSubmit, formState:{errors}} = useForm();
  const onSubmit = (data) => {
    console.log("data", data)
  }
  return (
    <div style={{marginTop:'30px'}}>
      {console.log("errors", errors)}
          <form onSubmit={handleSubmit(onSubmit)}>
            <input placeholder='Enter Name' {...register("firstName", {required:true})}/>
            {errors.firstName && <p role="alert">Name is required</p>}
            <input type="number" placeholder='Enter Age' {...register("age", {required:true, max:20})}/>
            {errors.age?.type == "required" && <p role="alert">Age is required</p>}
            {errors.age?.type == "max" && <p role="alert">Max age should 20</p>}
            <input placeholder='Enter Email' {...register("email", {required:true, pattern:/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/})}/>
            {errors.email?.type== "required" && <p role="alert">Email is required</p>}
            {errors.email?.type=="pattern" && <p role="alert">Email is Invalid</p>}
            <input type="submit" />
          </form>
    </div>
  );
}

export default App;
