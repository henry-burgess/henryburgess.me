// Libraries
import * as React from "react"

// Assets
import "../scss/main.scss"

// Components
import Layout from "../components/layout"

const ProjectsPage = () => {
  return (
    <Layout>
      <title>Henry Burgess - Projects</title>
      <h1 className={'headingStyles'}>
        Projects
      </h1>

      <h2 className={'headingStyles'}>
        jspsych-survey-control
      </h2>
      <p className={'paragraphStyles'}>
        A jsPsych plugin that enables control questions or attention checks to be easily added to behavioural experiments. It is up on GitHub at <a href='https://github.com/henry-burgess/jspsych-survey-control'>jspsych-survey-control</a>.
      </p>
      <p className={'paragraphStyles'}>
        You can add it to your project by running <code>npm i jspsych-survey-control</code>.
      </p>

      <br></br>

      <h2 className={'headingStyles'}>
        psygo
      </h2>
      <p className={'paragraphStyles'}>
        psygo aims to be a tool that streamlines creating plugins for the <a href='https://www.jspsych.org'>jsPsych</a> JavaScript library. 
        jsPsych can be used to create behavioural experiments that can be run through a web browser. 
      </p>
      <p className={'paragraphStyles'}>
        My project provides an easy method of setting up a development environment, testing the plugin, and eventually will support exporting any required files in 
        a format suitable for use on an administrative platform such as <a href='https://gorilla.sc'>Gorilla</a>.
        psygo will eventually be released as a CLI, and the source code is on my <a href='https://github.com/henry-burgess/psygo'>GitHub</a>.
      </p>
      <p className={'paragraphStyles'}>
        You can install an early version by running <code>npm i -g psygo</code>.
      </p>

      <br></br>

      <h2 className={'headingStyles'}>
        coinspotapi
      </h2>
      <p className={'paragraphStyles'}>
        This is an API wrapper written in TypeScript for the Australian <a href='https://www.coinspot.com.au'>CoinSpot</a> cryptocurrency exchange.
      </p>
      <p className={'paragraphStyles'}>
        It will eventually provide access to all of the API functionality described in the CoinSpot API <a href='https://www.coinspot.com.au/api'>documentation</a> and is a work in progress.
        The source code is available publicly on <a href='https://github.com/henry-burgess/coinspotapi'>GitHub</a>.
      </p>
      <p className={'paragraphStyles'}>
        Get started by running <code>npm i @henryburgess/coinspotapi</code>!
      </p>

      <br></br>

      <h2 className={'headingStyles'}>
        Raspberry Pi guitar effects
      </h2>
      <p className={'paragraphStyles'}>
        I used my Raspberry Pi to process audio input and apply various effects using the open-source Guitarix and JACK software.
      </p>
      <p className={'paragraphStyles'}>
        I've put some code on <a href='https://github.com/henry-burgess/rpi-guitar-fx'>GitHub</a> that allows you to use two push-buttons to cycle the active Guitarix preset. 
        You can read the entire process in the article I wrote on <a href='https://henryjburg.medium.com/guitar-effects-using-a-raspberry-pi-b24d39489a89'>Medium</a>.
      </p>
    </Layout>
  )
}

export default ProjectsPage
