import './directory.style.scss'
import CartegoryItem from '../category-item/category-item.component';

const Directory = ({categories}) => {
    return(
        <div className='directory-container'>
      {categories.map((category) => (
          <CartegoryItem key= {category} catergory={category}/>
        ))}
    </div>
    )
}

export default Directory;