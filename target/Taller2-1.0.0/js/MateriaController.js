/* global listaProfesores, listaHorario, listaCarreras */

'use strict';

var listaMaterias=[{id:1,nombre:'Software II', creditos: '3', profesor:{id:1,nombre:'Jose', apellidos:'Velasco', documento:'1552'}, 
        carrera: {id:1, nombre:'Ingenieria de sistemas', facultad:{id:1,nombre:'ingenieria'}}, horario: {id:1,diaSemana:'Lunes', horaInicio:Date.now(), horaFin:(Date.now())}},
    {id:2,nombre:'Bases de datos', creditos: '3', profesor:{id:1,nombre:'Jose', apellidos:'Velasco', documento:'1552'}, 
        carrera: {id:1, nombre:'Ingenieria de sistemas', facultad:{id:1,nombre:'ingenieria'}}, horario: {id:1,diaSemana:'Lunes', horaInicio:Date.now(), horaFin:(Date.now())}},
    {id:3,nombre:'musica', creditos: '4', profesor:{id:1,nombre:'Jose', apellidos:'Velasco', documento:'1552'}, 
        carrera: {id:1, nombre:'Ingenieria de sistemas', facultad:{id:1,nombre:'ingenieria'}}, horario: {id:1,diaSemana:'Lunes', horaInicio:Date.now(), horaFin:(Date.now())}}];

module.controller('MateriaCtrl', ['$scope', '$filter', '$http', function ($scope, $filter, $http) {
    //listar
    $scope.lista = listaMaterias;
    $scope.id=3;
    
    $scope.datosFormulario = {};
    $scope.panelEditar = false;
    
    $scope.listaProfesor = listaProfesores;
    $scope.listaHorarios = listaHorario;
    $scope.listaCarrera = listaCarreras;
    //guardar
    $scope.nuevo = function () {
        $scope.panelEditar = true;
        $scope.datosFormulario = {};
    };
    
    $scope.guardar = function () {
        $scope.errores = {};
        var error = false;
        
        if (error)
            return;
        
        if (!$scope.datosFormulario.id){
            $scope.datosFormulario.id = $scope.id++;
            $scope.lista.push($scope.datosFormulario);
        }
        $scope.panelEditar = false;
    };
    $scope.cancelar = function () {
        $scope.panelEditar = false;
        $scope.datosFormulario = {};
    };

    //editar
    $scope.editar = function (data) {
        $scope.panelEditar = true;
        $scope.datosFormulario = data;
    };
    //eliminar
    $scope.eliminar = function (data){
        if (confirm('\xbfDesea elminar este registro?')) {    
            for(var i=0; i<$scope.lista.length; i++){
                if($scope.lista[i]==data){
                    $scope.lista.splice(i,1);
                    break;
                }
            }
        }
    };
}]);
