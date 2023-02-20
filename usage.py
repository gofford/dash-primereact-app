import dash_primereact_app
import dash

app = dash.Dash(__name__)

app.layout = dash_primereact_app.DashPrimereactApp(id='component')


if __name__ == '__main__':
    app.run_server(debug=True)
