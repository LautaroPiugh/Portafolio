
package com.portafolio.lautapiugh.repository;

import com.portafolio.lautapiugh.entity.Persona;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;


@Repository
public interface IPersonaRepository extends JpaRepository<Persona, Long>{

}
