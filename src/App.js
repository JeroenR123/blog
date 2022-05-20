import BlogPost from "./Component.jsx/BlogPost"
import Definition from "./Component.jsx/Definition"
import Header from "./Component.jsx/Header"

function App() {
  return (
    <div data-theme='dark' className="overflow-x-hidden h-screen">
      <Header />
      <div className='w-screen flex flex-col items-center'>
        <div className='shadow-md mx-5 my-5 bg-primary artboard w-10/12 h-min rounded-md'>
          <div className='card'>
            <div className='card-title mx-2 my-2'>Blog 1</div>
            <div className='card-body'>
              {" "}
              <BlogPost>
                <div className='text-sm mx-2 my-2'>
                  Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
                  Aenean commodo ligula eget dolor. Aenean massa. Cum sociis
                  natoque penatibus et magnis dis parturient montes, nascetur
                  ridiculus mus. Donec quam felis, ultricies nec, pellentesque
                  eu, pretium quis, sem. Nulla consequat massa quis enim. Donec
                  pede justo, fringilla vel, aliquet nec, vulputate eget, arcu.
                  In enim justo, rhoncus ut, imperdiet a, venenatis vitae,
                  justo. Nullam dictum felis eu pede mollis pretium. Integer
                  tincidunt. Cras dapibus. Vivamus elementum semper nisi. Aenean
                  vulputate eleifend tellus. Aenean leo ligula, porttitor eu,{" "}
                  <Definition
                    text='test'
                    defnintion='Dit is een defnintie van test'
                  />{" "}
                  consequat vitae, eleifend ac, enim. Aliquam lorem ante,
                  dapibus in, viverra quis, feugiat a, tellus. Phasellus viverra
                  nulla ut metus varius laoreet. Quisque rutrum. Aenean
                  imperdiet. Etiam ultricies nisi vel augue. Curabitur
                  ullamcorper ultricies nisi. Nam eget dui. Lorem ipsum dolor
                  sit amet, consectetuer adipiscing elit. Aenean commodo ligula
                  eget dolor. Aenean massa. Cum sociis natoque penatibus et
                  magnis dis parturient montes, nascetur ridiculus mus. Donec
                  quam felis, ultricies nec, pellentesque eu, pretium quis, sem.
                  Nulla consequat massa quis enim. Donec pede justo, fringilla
                  vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus
                  ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis
                  eu pede mollis pretium. Integer tincidunt. Cras dapibus.
                  Vivamus elementum semper nisi. Aenean vulputate eleifend
                  tellus. Aenean leo ligula, porttitor eu, consequat vitae,
                  eleifend ac, enim. Aliquam lorem ante, dapibus in, viverra
                  quis, feugiat a, tellus. Phasellus viverra nulla ut metus
                  varius laoreet. Quisque rutrum. Aenean imperdiet. Etiam
                  ultricies nisi vel augue. Curabitur ullamcorper ultricies
                  nisi. Nam eget dui.
                </div>
              </BlogPost>
            </div>
          </div>
        </div>
        <div className='shadow-md bg-primary artboard w-10/12 h-min mx-5 my-5 rounded-md'>
          <div className='card'>
            <div className='card-title mx-2 my-2'>Blog 2</div>
            <div className='card-body'>
              {" "}
              <BlogPost>
                <div className='text-sm mx-2 my-2'>
                  Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
                  Aenean commodo ligula eget dolor. Aenean massa. Cum sociis
                  natoque penatibus et magnis dis parturient montes, nascetur
                  ridiculus mus. Donec quam felis, ultricies nec, pellentesque
                  eu, pretium quis, sem. Nulla consequat massa quis enim. Donec
                  pede justo, fringilla vel, aliquet nec, vulputate eget, arcu.
                  In enim justo, rhoncus ut, imperdiet a, venenatis vitae,
                  justo. Nullam dictum felis eu pede mollis pretium. Integer
                  tincidunt. Cras dapibus. Vivamus elementum semper nisi. Aenean
                  vulputate eleifend tellus. Aenean leo ligula, porttitor eu,{" "}
                  <Definition
                    text='test'
                    defnintion='Dit is een defnintie van test'
                  />{" "}
                  consequat vitae, eleifend ac, enim. Aliquam lorem ante,
                  dapibus in, viverra quis, feugiat a, tellus. Phasellus viverra
                  nulla ut metus varius laoreet. Quisque rutrum. Aenean
                  imperdiet. Etiam ultricies nisi vel augue. Curabitur
                  ullamcorper ultricies nisi. Nam eget dui. Lorem ipsum dolor
                  sit amet, consectetuer adipiscing elit. Aenean commodo ligula
                  eget dolor. Aenean massa. Cum sociis natoque penatibus et
                  magnis dis parturient montes, nascetur ridiculus mus. Donec
                  quam felis, ultricies nec, pellentesque eu, pretium quis, sem.
                  Nulla consequat massa quis enim. Donec pede justo, fringilla
                  vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus
                  ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis
                  eu pede mollis pretium. Integer tincidunt. Cras dapibus.
                  Vivamus elementum semper nisi. Aenean vulputate eleifend
                  tellus. Aenean leo ligula, porttitor eu, consequat vitae,
                  eleifend ac, enim. Aliquam lorem ante, dapibus in, viverra
                  quis, feugiat a, tellus. Phasellus viverra nulla ut metus
                  varius laoreet. Quisque rutrum. Aenean imperdiet. Etiam
                  ultricies nisi vel augue. Curabitur ullamcorper ultricies
                  nisi. Nam eget dui.
                </div>
              </BlogPost>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
