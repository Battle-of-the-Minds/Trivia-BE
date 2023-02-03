import React from 'react';
import Button from 'react-bootstrap/Button';

class Question extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      answersArray: [],
    };
  }

  componentDidMount() {
    this.scrambleAnswersArray();
  }

  // removeSpecialCharacters = (string) => {
  //   const renderString = string.replace(/&lt;/g, '<').replace(/&gt;/g, '>').replace(/&quot;/g, '"').replace(/&#39;/g, `'`).replace(/&amp;/g, '&');
  //   return renderString;
  // };

  scrambleAnswersArray = () => {
    const scrambledAnswersArray = [
      ...this.props.question.incorrect_answers,
      this.props.question.correct_answer,
    ];
    scrambledAnswersArray.sort(() => 0.5 - Math.random());
    this.setState({
      answersArray: scrambledAnswersArray,
    });
  };

  render() {
    return (
      <>
        {this.props.renderedQuestionIndex ===
        this.props.currentQuestionIndex ? (
          <form onSubmit={() => this.props.handleSubmitAnswer(event)}>
            <h1>{this.props.question.question}</h1>

            {this.state.answersArray.map((answer, index) => (
              <label key={index}>
                <input
                  name={this.props.question.question}
                  type='radio'
                  value={answer}
                  onChange={(e) =>
                    this.props.handleAnswerChange(e.target.value)
                  }
                />
                {answer}
              </label>
            ))}
            <br />
            <Button type='submit'>Submit Answer</Button>
          </form>
        ) : null}
      </>
    );
  }
}

export default Question;
