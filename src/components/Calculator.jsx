import React,{useState} from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import './Calculator.css';

const Calculator = () => {
    const [sub1,setSub1]=useState('');
    const [sub2,setSub2]=useState('');
    const [sub3,setSub3]=useState('');
    const [sub4,setSub4]=useState('');
    const [sub5,setSub5]=useState('');
    const [sub6,setSub6]=useState('');
    const [sub7,setSub7]=useState('');
    const [sub8,setSub8]=useState('');
    const [total,setTotal]=useState('');

    const getCredit = (subject)=>{
        if (subject>=90) return 10;
        else if(subject>=80 && subject<90) return 9;
        else if(subject>=70 && subject<80) return 8;
        else if(subject>=60 && subject<70) return 7;
        else if(subject>=50 && subject<60) return 6;
        else if(subject>=45 && subject<50) return 5;    
        else if(subject>=40 && subject<45) return 4;
        else return 0;
    }

    const handleSubmit = (e)=>{
        e.preventDefault();
        //getting credits for the subject.
        const cred1 = getCredit(sub1)*3;
        setSub1('');
        const cred2 = getCredit(sub2)*4;
        setSub2('');
        const cred3 = getCredit(sub3)*3;
        setSub3('');
        const cred4 = getCredit(sub4)*3;
        setSub4('');
        const cred5 = getCredit(sub5)*1;
        setSub5('');
        const cred6 = getCredit(sub6)*1;
        setSub6('');
        const cred7 = getCredit(sub7)*1;
        setSub7('');
        const cred8 = getCredit(sub8)*2;
        setSub8('');
        
        setTotal((cred1+cred2+cred3+cred4+cred5+cred6+cred7+cred8)/18);
        console.log(total);

    }
    
  return (
    <Form className='mt-4 custom-form' onSubmit={handleSubmit}>
      <Form.Group className="mb-3 col-md-3" controlId="formBasicEmail">
        <Form.Label>21**51</Form.Label>
        <Form.Control value={sub1} onChange={(e)=>setSub1(e.target.value)} type="number" placeholder="" />
      </Form.Group>

      <Form.Group className="mb-3 col-md-3" controlId="formBasicEmail">
        <Form.Label>21**52</Form.Label>
        <Form.Control value={sub2} onChange={(e)=>setSub2(e.target.value)} type="number" placeholder="" />
      </Form.Group>

      <Form.Group className="mb-3 col-md-3" controlId="formBasicEmail">
        <Form.Label>21**53</Form.Label>
        <Form.Control value={sub3} onChange={(e)=>setSub3(e.target.value)}type="number" placeholder="" />
      </Form.Group>

      <Form.Group className="mb-3 col-md-3" controlId="formBasicEmail">
        <Form.Label>21**54</Form.Label>
        <Form.Control value={sub4} onChange={(e)=>setSub4(e.target.value)}type="number" placeholder="" />
      </Form.Group>

      <Form.Group className="mb-3 col-md-3" controlId="formBasicEmail">
        <Form.Label>21**L55(LAB)</Form.Label>
        <Form.Control value={sub5} onChange={(e)=>setSub5(e.target.value)} type="number" placeholder="" />
      </Form.Group>

      <Form.Group className="mb-3 col-md-3" controlId="formBasicEmail">
        <Form.Label>21CIV57</Form.Label>
        <Form.Control value={sub6} onChange={(e)=>setSub6(e.target.value)}type="number" placeholder="" />
      </Form.Group>

      <Form.Group className="mb-3 col-md-3" controlId="formBasicEmail">
        <Form.Label>21**L581(LAB)</Form.Label>
        <Form.Control value={sub7} onChange={(e)=>setSub7(e.target.value)}type="number" placeholder="" />
      </Form.Group>

      <Form.Group className="mb-3 col-md-3" controlId="formBasicEmail">
        <Form.Label>21RMI56</Form.Label>
        <Form.Control value={sub8} onChange={(e)=>setSub8(e.target.value)} type="number" placeholder="" />
      </Form.Group>
 

      <Button variant="primary" type="submit">
        Submit
      </Button>
      { total && <p className='mt-3'>{total}</p>}
    </Form>
  )
}

export default Calculator
