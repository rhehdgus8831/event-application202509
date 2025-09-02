package com.study.event.repository;

import com.study.event.domain.entity.Event;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Slice;

public interface EventRepositoryCustom {

    // 이벤트 목록조회 페이징 처리 ( 무한 스크롤 적용 )
    Slice<Event> findEvents(Pageable pageable);


}
