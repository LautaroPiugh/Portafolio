
package com.portafolio.lautapiugh.entity;

import java.util.Objects;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.validation.constraints.NotNull;
import javax.validation.constraints.Size;
import lombok.Getter;
import lombok.Setter;

@Getter @Setter
@Entity
public class Persona {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY )
    private Long id;
    
    @NotNull
    @Size(min = 1, max = 50, message = "El nombre tiene mas caracteres de lo permitido")
    private String name;
    
    @NotNull
    @Size(min = 1, max = 50, message = "El apellido tiene mas caracteres de lo permitido")
    private String lastname;
    
    @Size(min = 1, max = 50, message = "El nombre tiene mas caracteres de lo permitido")
    private String img;   
}
