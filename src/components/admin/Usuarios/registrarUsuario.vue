<template>
    <div class="container-fluid">
        <div class="row">
            <div class="col-lg-12">
                <h1 class="page-header">Nueva Usuario</h1>
            </div>

        </div>
        <div class="row">
            <div class="col-lg-12">
                <div class="panel panel-default">
                    <div class="panel-heading">
                        Formulario de Registro Usuarios
                        {{msg}}
                    </div>
                    <div class="panel-body">
                            <form role="form">
                                <div class="row">
                                    <div class="col-lg-6">
                                        <div class="form-group">
                                        <label>C.I.</label>
                                        <input class="form-control" placeholder="Ingresa C.I." v-model="usuario.ci">

                                    </div>
                                    <div class="form-group">
                                        <label>Nombre</label>
                                        <input class="form-control" placeholder="Ingresa tus Nombres" v-model="usuario.nombre">

                                    </div>
                                    <div class="form-group">
                                        <label>Apellidos</label>
                                        <input class="form-control" placeholder="Ingresa tus Apellidos" v-model="usuario.apellido">

                                    </div>
                                    <div class="form-group">
                                        <label>Email</label>
                                        <input class="form-control" type="email" placeholder="Ingresa Email" v-model="usuario.email">

                                    </div>
                                    </div>

                                    <div class="col-lg-6">
                                        <div class="form-group">
                                        <label>Contraseña</label>
                                        <input class="form-control" type="password" placeholder="Ingresa Contraseña" v-model="usuario.password">
                                    </div>
                                    <div class="form-group">
                                        <label>Telefono</label>
                                        <input class="form-control" placeholder="Ingresa tu Telefono" v-model="usuario.telefono">
                                    </div>
                                    <div class="form-group">
                                        <label>Seleciona tu Rol</label>
                                        <select class="form-control" name="" id="" v-model="usuario.rol">
                                            <option>Administrador</option>
                                            <option>Cliente</option>
                                          </select>
                                    </div>
                                    </div>
                                </div>
                                        <button class="btn btn-primary" @click="registrarUsuario()">Registrar</button>
                                        <router-link to="/listadoUsuario" class="btn btn-danger">Cancelar</router-link>
                                </form>

                    </div>

                </div>
            </div>
        </div>
    </div> 
</template>
<script>
export default {
    data(){
        return{
            msg:'',
            usuario:{
                ci:'',
                nombre:'',
                apellido:'',
                email:'',
                telefono:'',
                password:'',
                rol:'',
                imagen:'csdc'
            }
        }
    },
    methods:{
        registrarUsuario(){
            console.log(this.usuario);
                this.axios.post('/api/create-usuario',this.usuario).then(res=>{
                this.msg=res.data.msg
            })
            this.$route.push("/listadoUsuario")
        }
    }
}
</script>