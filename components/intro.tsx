import {CMS_INTRO, CMS_NAME} from '../lib/constants'

const Intro = () => {
  return (
    <section className="flex-col md:flex-row flex items-center md:justify-between mt-16 mb-16 md:mb-12">
      <h1 className="text-5xl md:text-8xl font-bold tracking-tighter leading-tight md:pr-8">
        Mj Blog
      </h1>
      <h4 className="text-center md:text-left text-lg mt-5 md:pl-8">
          <b>Stories</b> mainly <b>about</b> real life <b>Android development</b>
      </h4>
    </section>
  )
}

export default Intro
