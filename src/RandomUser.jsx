import React, {Component} from "react";

class RandomUser extends Component {
    constructor(props) {
        super(props)
        this.state = {
            user: null,
            loading: false,
            error: null
        }
    }

    componentDidMount() {
        console.log('RandomUser смонтирован');
        this.fetchUser();
    }

    componentWillUnmount() {
        console.log('RandomUser размонтирован');
    }

    fetchUser = async () => {
        this.setState({loading: true, error: null})
        try {
            const response = await fetch('https://randomuser.me/api/');
            if (!response.ok) {
                throw new Error (`Ошибка HTTP: ${response.status}`)
            }
            const data = await response.json();
            const userData = data.results[0]
            const user = {
                name: `${userData.name.first} ${userData.name.last}`,
                avatar: userData.picture.medium,
            };
            this.setState({ user, loading: false });
        } catch (err) {
            console.error('Ошибка загрузки:', err);
            this.setState({ error: err.message, loading: false });
        }
    }
    handleNewUser = () => {
        this.fetchUser();
    };

    render() {
        const { user, loading, error } = this.state;
        return (
            <div>
                {loading && <p>Загрузка</p>}
                {error && <p>Ошибка: {error}</p>}
                {user && (
                    <div>
                        <img src={user.avatar}/>
                        <p>{user.name}</p>
                    </div>
                )}
                <button
                    onClick={this.handleNewUser}
                >
                    Загрузить нового пользователя
                </button>
            </div>
        )
    }
}

export default RandomUser;