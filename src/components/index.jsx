import React, { Component ,Fragment} from 'react'

export default class PictureSelect  extends Component {
    constructor(props){
        super(props);
        this.values=props.value;
    }
    render() {
        let {pictures,value}=this.props;    
        
        return (
            <div>   
                <h2>已经选中了{this.values.length}个图片</h2>
                <div>
                    {   
                        pictures.map((item,index)=>(
                           <Fragment>
                                <input type="checkbox" checked={this.values.indexOf(String(index+1))>-1?true:false} onChange={this.handleChange.bind(this,item.id)}/>
                                <img src={item.url} key={index} />
                           </Fragment>
                        ))
                    }
                </div>
            </div>
        )
    }
    handleChange(id){
        this.props.onChange(id);
        if(this.values.indexOf(id)>-1){
            this.values.splice(this.values.indexOf(id),1)
        }else{
            this.values.push(id)
        }
   
    }
}
