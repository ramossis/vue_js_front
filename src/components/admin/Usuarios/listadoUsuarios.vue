<template>
       <div class="container-fluid">
                    <div class="row">
                        <div class="col-lg-12">
                            <h1 class="page-header">Listado Usuarios  <router-link to="/registraUsuario"><button class="btn btn-success">Nuevo Cliente</button></router-link></h1>
                        </div>
                        <!-- /.col-lg-12 -->
                    </div>
                    <!-- /.row -->
                    <div class="row">
                        <div class="col-lg-12">
                            <div class="panel panel-default">
                                <div class="panel-heading">
                                    Gestion y Registro de Clientes
                                </div>
                                <!-- /.panel-heading -->
                                <div class="panel-body">
                                    <div class="table-responsive">
                                        <table class="table table-striped table-bordered table-hover" id="dataTables-example">
                                            <thead>
                                                <tr>
                                                    <th>ID</th>
                                                    <th>C.I.</th>
                                                    <th>Nombre</th>
                                                    <th>Apellidos</th>
                                                    <th>Email</th>
                                                    <th>Telefono</th>
                                                    <th>Rol</th>
                                                    <th>Foto</th>
                                                    <th>Opciones</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr v-for="user in usuarios" :key="user.id">
                                                    <td>{{user.id}}</td>
                                                    <td>{{user.ci}}</td>
                                                    <td>{{user.nombre}}</td>
                                                    <td>{{user.apellido}}</td>
                                                    <td>{{user.email}}</td>
                                                    <td>{{user.telefono}}</td>
                                                    <td>{{user.rol}}</td>
                                                    <td>{{user.foto}}</td>
                                                    <td class="center">
                                                        <button type="submit" class="btn btn-info">Editar</button>
                                                        <button type="reset" class="btn btn-danger">Eliminar</button>
                                                    </td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                    <!-- /.table-responsive -->
                                </div>
                                <!-- /.panel-body -->
                            </div>
                            <!-- /.panel -->
                        </div>
                        <!-- /.col-lg-12 -->
                    </div>
                    <!-- /.row -->
                <!-- /.container-fluid -->
            </div>
</template>
<script>
export default {
    data(){
        return{
            usuarios:[{}]
        }
    },
    mounted(){
        this.axios.get('/api/get-usuario')
        .then(res=>{
            console.log(res.data);
            this.usuarios=res.data;
        })
    }
}
</script>