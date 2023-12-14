from flask import Flask, render_template
from models import db, User

app = Flask(__name__)
app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///site.db'
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False

# Inicialização do banco de dados
from models import db
db.init_app(app)

# Função para adicionar usuários
@app.route('/api/users')
def add_users():
    with app.app_context():
        new_users = [
            User(username='usuario1', email='usuario1@example.com'),
            User(username='usuario2', email='usuario2@example.com'),
            # Adicione quantos usuários você desejar dessa maneira
        ]

        db.session.add_all(new_users)
        db.session.commit()

# if __name__ == '__main__':
#     add_users()

# Rota para exibir os usuários cadastrados
@app.route('/users')
def show_users():
    from models import User  # Importar dentro da função para evitar problemas de ciclo de importação
    users = User.query.all()
    return render_template('users.html', users=users)

if __name__ == '__main__':
    app.run(debug=True)
