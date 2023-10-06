import { Demo } from "../../dominio/entidades/Demo";
import { IDemoRepository } from "../../aplicacion/interfaces/IDemoRepository";

export class DemoRepository implements IDemoRepository {
  async listarDemo(): Promise<Demo[]> {
    let response = await fetch(
      "https://my-json-server.typicode.com/angieAGL/datosDemo/listaDemo"
    );
    let respo1= await fetch("http://api-admin-load-balancer-dev-1144647766.us-east-1.elb.amazonaws.com/notificacion/leer_todo")
    let data1= await response.json();
    console.log(data1);
    let data = await response.json();
    return data;
  }

  async eliminarDemo(id: number): Promise<boolean> {
    let listado_json: Demo[] = await this.listarDemo();

    return listado_json.some((demo) => demo.id === id);
  }

  async agregarDemo(demo: Demo): Promise<boolean> {
    let listado_json: Demo[] = await this.listarDemo();

    if (demo.id === 0) {
      return false;
    }
    listado_json.push(demo);
    return true;
  }

  async editarDemo(demo: Demo): Promise<boolean> {
    let listado_json: Demo[] = await this.listarDemo();

    return listado_json.some((res) => res.id === demo.id);
  }
}
