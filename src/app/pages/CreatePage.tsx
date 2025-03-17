import Header from "../components/header/Header"
import PostForm from "../components/PostForm"


function CreatePage() {
  return (
    <div>
        <Header />
      <h1>Este es un formulario de creación de un nuevo post</h1>
      <PostForm></PostForm>
    </div>
  )
}

export default CreatePage
