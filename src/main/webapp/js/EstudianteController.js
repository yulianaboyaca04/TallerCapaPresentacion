/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

/* global listaMunicipios, listaCarreras */

'use strict';

    var listaEstudiantes=[{id:1,nombre:'Jose',apellidos:'Velasco Ortiz',codigo:'12552',documento:'1552', fechaNacimiento:"1996-08-31", municipio:{id:1,nombre:'Tunja'}, carrera:{id:1, nombre:'Ingenieria de sistemas', facultad:{id:1,nombre:'ingenieria'}}},
                         {id:2,nombre:'Jorge',apellidos:'Catolico Ramirez',codigo:'151252',documento:'5455', fechaNacimiento:"1996-08-31", municipio:{id:1,nombre:'Tunja'}, carrera:{id:1, nombre:'Ingenieria de sistemas', facultad:{id:1,nombre:'ingenieria'}}},
                         {id:3,nombre:'Yuliana',apellidos:'Boyaca Aguilar', codigo:'12552',documento:'4557', fechaNacimiento:"1996-08-31", municipio:{id:1,nombre:'Tunja'}, carrera:{id:1, nombre:'Ingenieria de sistemas', facultad:{id:1,nombre:'ingenieria'}}}];

module.controller('EstudianteCtrl', ['$scope', '$filter', '$http', function ($scope, $filter, $http) {
    //listar
    $scope.lista = listaEstudiantes;
    $scope.id=3;
    
    $scope.datosFormulario = {};
    $scope.panelEditar = false;
    
    $scope.listaMunicipio = listaMunicipios;
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

