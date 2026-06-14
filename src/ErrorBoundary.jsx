import React, { Component } from 'react';

class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hasError: false,
      errorMessage: ''
    };
  }
  static getDerivedStateFromError(error) {
    return {
      hasError: true,
      errorMessage: error.message
    };
  }
  componentDidCatch(error, errorInfo) {
    console.error('ErrorBoundary поймал ошибку:', error, errorInfo);
  }
  handleReset = () => {
    this.setState({
      hasError: false,
      errorMessage: ''
    });
  };
  render() {
    if (this.state.hasError) {
        return (
            <div>
                <h3 style={{ color: '#cc0000' }}>Не удалось загрузить компонент</h3>
                <p style={{ color: '#666' }}>Ошибка: {this.state.errorMessage}</p>
                <button
                    onClick={this.handleReset}
                >
                    Попробовать снова
                </button>
            </div>
        )
    }
    return this.props.children;
  }
}

export default ErrorBoundary;