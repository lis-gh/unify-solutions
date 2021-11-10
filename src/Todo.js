import React, { Component,Fragment } from 'react'
class Todo extends Component{
    //vars of the app
    state={
        todo:[
            {title:'reading book',description:'reading 10 pages every day',checked:'yes',createdAt:'22/10',finishedAt:'9/11'},
            {title:'writing book',description:'writing 10 pages every day',checked:'no',createdAt:'22/10',finishedAt:'9/12'}

        ],
        visibe:false,
        view:[]
    }
    //method to list all todo items
    list=()=>
    { 
        
        return(this.state.todo.map((ele,index)=>{
            return(
                <Fragment>
               <li className="list-group-item " >
            <form name="form2" style={{display:"none"}} >
                <input type="text" name="newtitle" defaultValue={ele.title}/><br></br>
                <input type="text" name="newdesc" defaultValue={ele.description}/><br></br>
                <input type="text" name="newcheck" defaultValue={ele.checked}/><br></br>
                <input type="text" name="newcreate" defaultValue={ele.createdAt}/><br></br>
                <input type="text" name="newfinish" defaultValue={ele.finishedAt}/>
                <button type="submit"  className="btn btn-outline-warning" onClick={(e)=>{this.edititem(index,e)}}>update</button>
            </form>
           
           
           
           
            <span>   
         {ele.title} 
             <button className="btn btn-danger m-1 float-right" onClick={()=>{this.deleteitem(index)}}>Delete</button>
             <button className="btn btn-outline-success m-1 float-right" onClick={()=>{this.togglevisible(index)}}>Update</button>
             <button className="btn btn-outline-success m-1 float-right" onClick={()=>{this.review(index)}}>View info</button>

            </span>
             </li>
             </Fragment>
                )
        })

        )

    }
    //method to show the update form
    togglevisible=(index)=>{
       const c1=document.getElementById("allcourse").children[index].querySelector("span");
       document.getElementById("allcourse").children[index].querySelector("form").style.display="block";
       c1.style.display="none";
           
     
    }
    //method to update the state var that contains the selected todo item info
    review=(index)=>{
       const t=this.state.todo[index].title; 
       const d=this.state.todo[index].description; 
       const ch=this.state.todo[index].checked; 
       const cr=this.state.todo[index].createdAt; 
       const f=this.state.todo[index].finishedAt;    
       this.state.view=[t,d,ch,cr,f];
       this.setState(this.state.view);
     }

     //method that will list the selected todo item info
     viewinfo=()=>{
         console.log(this.state.view);
         return(
           
                 this.state.view.map((e)=>{
                     return(
                     <li className='list-group-item'>{e}</li>
                     )
                 })
            
         )
     }
   
     //method to add a new item in todo list
    additem=(e)=>{
     e.preventDefault();
     let itemtitle=document.form1.title.value;
     let itemdesc=document.form1.desc.value;
     let itemcheck=document.form1.check.value;
     let itemcreate=document.form1.created.value;
     let itemfinish=document.form1.finished.value;
     this.state.todo.push({title:itemtitle,
                          description:itemdesc,
                          checked:itemcheck,
                          createdAt:itemcreate,
                          finishedAt:itemfinish});
     this.setState(this.state.todo);
     document.form1.title.value='';
     document.form1.desc.value='';
     document.form1.check.value='';
     document.form1.created.value='';
     document.form1.finished.value='';
    }
    //method to delete the selected item of todo list
    deleteitem=(index)=>{
        this.state.todo.splice(index,1);
        this.setState(this.state.todo);

    }
    //method to update an item of todo list that have added before
    edititem=(index,e)=>{
       e.preventDefault();
       const title=document.getElementById("allcourse").children[index].querySelector("form").newtitle.value;
       const desc=document.getElementById("allcourse").children[index].querySelector("form").newdesc.value;
       const check=document.getElementById("allcourse").children[index].querySelector("form").newcheck.value;
       const create=document.getElementById("allcourse").children[index].querySelector("form").newcreate.value;
       const finish=document.getElementById("allcourse").children[index].querySelector("form").newfinish.value;
       this.state.todo[index].title=title;
       this.state.todo[index].description=desc;
       this.state.todo[index].checked=check;
       this.state.todo[index].createdAt=create;
       this.state.todo[index].finishedAt=finish;
      this.setState(this.state.todo);
     console.log(this.state.todo);
     document.getElementById("allcourse").children[index].querySelector("span").style.display="block";
        document.getElementById("allcourse").children[index].querySelector("form").style.display="none";



    }
    render(){
     
    return(
        <div className="container">
            <h1>Todo App</h1>
            <form className="form-inline mt-5" name="form1">
                <input type="text" name="title" placeholder="add the title what you want to do..." className="form-control w-75"/>
                <input type="text" name="desc" placeholder="add the description about what you want to do..." className="form-control w-75"/>
                <input type="text" name="check" placeholder="write yes or no if it checked" className="form-control w-75"/>
                <input type="text" name="created" placeholder="write the start date" className="form-control w-75"/>
                <input type="text" name="finished" placeholder="write the finished date" className="form-control w-75"/>
                <button type="submit" className="btn btn-success w-25" onClick={this.additem}>Add</button>
            </form>
            <ul className="list-group " id="allcourse">
               {this.list()}
            </ul>
            <div className='mt-5'>
             {this.viewinfo()}
            </div>
        
        </div>
    )
}
}

export default Todo;