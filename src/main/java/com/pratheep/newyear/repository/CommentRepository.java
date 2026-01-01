package com.pratheep.newyear.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import com.pratheep.newyear.model.Comment;
import java.util.List;

public interface CommentRepository extends JpaRepository<Comment, Long> {
    List<Comment> findByRelation(String relation);
}

