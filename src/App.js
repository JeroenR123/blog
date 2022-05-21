import Avatar from "./Component.jsx/Avatar"
import BlogPost from "./Component.jsx/BlogPost"
import Definition from "./Component.jsx/Definition"
import Header from "./Component.jsx/Header"

function App() {
  return (
    <div data-theme='dark' className='overflow-x-hidden h-min'>
      <Header />
      <div className='w-screen flex flex-col items-center'>
        {/* Start post */}
        <div className='shadow-md mx-5 my-5 bg-primary artboard w-10/12 h-min rounded-md'>
          <div className='card'>
            <div className='card-title mx-auto my-2'>
              I have an{" "}
              <Definition
                text='ethical dilemma?'
                defnintion='A moral (ethical) dilemma is a situation that involves a choice, decision, act/action, solution that may include an unpleasant problem or situation where you feel you simply do not know what to do or which way to turn.'
              />
            </div>
            <div className='card-body'>
              {" "}
              <BlogPost>
                <div className='text-md mx-2 my-2'>
                  Hello everyone, <br />I have a problem, currently I am writing
                  my thesis. In my thesis I analyse sensitive information. I
                  write an{" "}
                  <Definition
                    text='algorithm'
                    defnintion='A process or set of rules to be followed in calculations or other problem-solving operations, especially by a computer.'
                  />{" "}
                  to detect interesting persons. I clearly state that this
                  algorithm has bias and can therefore not be trusted. However,
                  I am afraid that this alrogithm will be deployed in a
                  situation where the user trusts the algorithm. I do not want
                  to fail my thesis, yet on the other hand, I do not want to
                  provide the model to the company. Who do I do? 
                </div>
              </BlogPost>
              <Avatar
                name='Jeroen Raap'
                url='https://media-exp1.licdn.com/dms/image/C4D03AQERxR4o6877TA/profile-displayphoto-shrink_200_200/0/1599146562157?e=1658361600&v=beta&t=fALi3XH1BSSdK43M42VdwWN2Ywo3EvJVGaSevAYjSj0'
              />
            </div>
          </div>
        </div>
        {/* Kants vision */}
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
              <Avatar
                name='Immanuel Kant'
                url='http://t2.gstatic.com/licensed-image?q=tbn:ANd9GcQRG3dwbX2sZaqAkHaM_uHXgTWnGEcMe9iVIK6rXKYSvMc3DkJdOLianddwLZtI'
              />
            </div>
          </div>
        </div>

        {/* Someone else vision */}
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
        {/* Jeroen Vision */}
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
