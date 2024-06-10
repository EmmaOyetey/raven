use raven;

INSERT INTO organisation (
`name`,
`logo`,
`overview`,
`websiteURL`,
`impactURL`,
`careers`,
`creative_arts`,
`curriculum`,
`life_skills`,
`mental_health`,
`physical_activity`,
`pshe`,
`tech`
)
VALUES (
"Dallaglio Rugby Works",
"https://images.squarespace-cdn.com/content/v1/62076e7c63f4f06142ff5cb6/7eef0faa-7f36-4176-b6ca-94528dd26c43/DRW-Social-Sharing.jpg",
"We use rugby’s core values of teamwork, respect, enjoyment, discipline and sportsmanship to equip young people that are excluded from education, with the life skills and attitudes they need to move into sustained Education, Employment or Training after school.",
"https://www.dallagliorugbyworks.com/",
"https://www.dallagliorugbyworks.com/impact",
FALSE,
FALSE,
FALSE,
TRUE,
TRUE,
TRUE,
FALSE,
FALSE
);

INSERT INTO organisation (
`name`,
`logo`,
`overview`,
`websiteURL`,
`impactURL`,
`careers`,
`creative_arts`,
`curriculum`,
`life_skills`,
`mental_health`,
`physical_activity`,
`pshe`,
`tech`
)
VALUES (
"ReachOut",
"https://www.reachoutuk.org/wp-content/uploads/2023/02/Untitled-design-4.png",
"At ReachOut, we run after school mentoring projects across London, Greater Manchester and Liverpool for young people aged 9-19. Young people are paired with their own volunteer mentor and, each week, through 1:1 mentoring and fun group activities, they grow in character and confidence, sparking change in themselves and society.",
"https://www.reachoutuk.org/",
"https://www.reachoutuk.org/our-impact/",
FALSE,
FALSE,
TRUE,
TRUE,
TRUE,
FALSE,
TRUE,
FALSE
);

INSERT INTO organisation (
`name`,
`logo`,
`overview`,
`websiteURL`,
`impactURL`,
`careers`,
`creative_arts`,
`curriculum`,
`life_skills`,
`mental_health`,
`physical_activity`,
`pshe`,
`tech`
)
VALUES (
"Career Ready",
"https://th.bing.com/th?id=OIP.ED1TdaMGR5mq2oETmti0NgHaHN&w=253&h=246&c=8&rs=1&qlt=90&o=6&dpr=1.3&pid=3.1&rm=2",
"We believe that every young person should have the opportunity to kickstart a rewarding future. Yet, due to the social mobility challenge in the UK, the futures of far too many young people are determined by background, not potential.We exist to fix this by connecting young people to the world of work",
"https://careerready.org.uk/",
"https://careerready.org.uk/annual-report-and-impact/",
TRUE,
FALSE,
FALSE,
FALSE,
FALSE,
FALSE,
FALSE,
FALSE
);
INSERT INTO organisation (
`name`,
`logo`,
`overview`,
`websiteURL`,
`impactURL`,
`careers`,
`creative_arts`,
`curriculum`,
`life_skills`,
`mental_health`,
`physical_activity`,
`pshe`,
`tech`
)
VALUES (
"Speakers for Schools",
"https://th.bing.com/th/id/OIP.3BHLyhzYG9a5mAbsuCcWXgHaHa?w=172&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7",
"We aim to close the opportunity gap and level the playing field for all 11-19-year-olds from state schools and colleges by providing fair access to fully funded work experience and inspirational talks that will help them to reach their full career potential.",
"https://www.speakersforschools.org/",
"https://www.speakersforschools.org/about/",
TRUE,
FALSE,
FALSE,
FALSE,
FALSE,
FALSE,
FALSE,
FALSE
);
INSERT INTO organisation (
`name`,
`logo`,
`overview`,
`websiteURL`,
`impactURL`,
`careers`,
`creative_arts`,
`curriculum`,
`life_skills`,
`mental_health`,
`physical_activity`,
`pshe`,
`tech`
)
VALUES (
"The Brilliant Club",
"https://th.bing.com/th?id=OIP.KE_iATpKZLQNV8mkAQJq9gAAAA&w=249&h=250&c=8&rs=1&qlt=90&o=6&dpr=1.3&pid=3.1&rm=2",
"The Brilliant Club works with schools and universities across the UK. We mobilise the PhD community to support students who are less advantaged to access the most competitive universities and succeed when they get there. ",
"https://thebrilliantclub.org/",
"https://thebrilliantclub.org/evaluation/programmes-evaluation/",
FALSE,
FALSE,
TRUE,
FALSE,
FALSE,
FALSE,
FALSE,
FALSE
);
INSERT INTO organisation (
`name`,
`logo`,
`overview`,
`websiteURL`,
`impactURL`,
`careers`,
`creative_arts`,
`curriculum`,
`life_skills`,
`mental_health`,
`physical_activity`,
`pshe`,
`tech`
)
VALUES (
"RISE Projects",
"https://th.bing.com/th?id=OIP.-90V7PRoAqw84BZhdPOucwAAAA&w=226&h=113&c=8&rs=1&qlt=90&o=6&dpr=1.3&pid=3.1&rm=2",
"RISE Projects works to increase empowerment, skills and resilience of young people and their families. Our mission is to provide young people with a safe atmosphere to develop their skills and build positive relationships. We do this through the provision of leadership and mentoring programmes, signposting information; and through community building, training and education.",
"https://www.riseprojects.org.uk/",
"https://www.riseprojects.org.uk/news",
TRUE,
TRUE,
TRUE,
TRUE,
TRUE,
TRUE,
FALSE,
FALSE
);
INSERT INTO rating (organisation_id, rating, comment, name, created_at)
VALUES (1, 4, "Great organization, really helped me develop life skills through rugby.", "John Smith", NOW());

INSERT INTO rating (organisation_id, rating, comment, name, created_at)
VALUES (1, 5, "Dallaglio Rugby Works is amazing! The mentors are so supportive and encouraging.", "Emily Johnson", NOW());

INSERT INTO rating (organisation_id, rating, comment, name, created_at)
VALUES (2, 4, "ReachOut has made a positive impact on my life. My mentor has helped me improve my grades.", "James Brown", NOW());

INSERT INTO rating (organisation_id, rating, comment, name, created_at)
VALUES (2, 5, "The volunteers at ReachOut are fantastic! They truly care about the kids.", "Sarah Wilson", NOW());

INSERT INTO rating (organisation_id, rating, comment, name, created_at)
VALUES (3, 3, "Career Ready has provided valuable career guidance, but could improve their resources.", "Michael Clark", NOW());

INSERT INTO rating (organisation_id, rating, comment, name, created_at)
VALUES (3, 4, "I'm grateful for the internship opportunities provided by Career Ready.", "Emma Roberts", NOW());

INSERT INTO rating (organisation_id, rating, comment, name, created_at)
VALUES (4, 5, "Speakers for Schools has opened my eyes to various career paths. Highly recommended!", "David Taylor", NOW());

INSERT INTO rating (organisation_id, rating, comment, name, created_at)
VALUES (4, 4, "The talks organized by Speakers for Schools are insightful and inspiring.", "Sophie Brown", NOW());

INSERT INTO rating (organisation_id, rating, comment, name, created_at)
VALUES (5, 4, "The Brilliant Club's programs have helped me gain confidence in my academic abilities.", "Oliver White", NOW());

INSERT INTO rating (organisation_id, rating, comment, name, created_at)
VALUES (5, 3, "I wish The Brilliant Club provided more support outside of the classroom.", "Emma Green", NOW());

INSERT INTO rating (organisation_id, rating, comment, name, created_at)
VALUES (6, 5, "RISE Projects is doing incredible work in the community. Proud to be a part of it.", "Jessica Lee", NOW());

INSERT INTO rating (organisation_id, rating, comment, name, created_at)
VALUES (6, 4, "The programs offered by RISE Projects have helped me develop leadership skills.", "Matthew Harris", NOW());

INSERT INTO rating (organisation_id, rating, comment, name, created_at)
VALUES (1, 4, "Great organization, really helped me develop life skills through rugby.", "John Smith", NOW());

INSERT INTO rating (organisation_id, rating, comment, name, created_at)
VALUES (1, 5, "Dallaglio Rugby Works is amazing! The mentors are so supportive and encouraging.", "Emily Johnson", NOW());

-- ReachOut
INSERT INTO rating (organisation_id, rating, comment, name, created_at)
VALUES (2, 4, "ReachOut has made a positive impact on my life. My mentor has helped me improve my grades.", "James Brown", NOW());

INSERT INTO rating (organisation_id, rating, comment, name, created_at)
VALUES (2, 5, "The volunteers at ReachOut are fantastic! They truly care about the kids.", "Sarah Wilson", NOW());

-- Career Ready
INSERT INTO rating (organisation_id, rating, comment, name, created_at)
VALUES (3, 3, "Career Ready has provided valuable career guidance, but could improve their resources.", "Michael Clark", NOW());

INSERT INTO rating (organisation_id, rating, comment, name, created_at)
VALUES (3, 4, "I'm grateful for the internship opportunities provided by Career Ready.", "Emma Roberts", NOW());

-- Speakers for Schools
INSERT INTO rating (organisation_id, rating, comment, name, created_at)
VALUES (4, 5, "Speakers for Schools has opened my eyes to various career paths. Highly recommended!", "David Taylor", NOW());

INSERT INTO rating (organisation_id, rating, comment, name, created_at)
VALUES (4, 4, "The talks organized by Speakers for Schools are insightful and inspiring.", "Sophie Brown", NOW());

-- The Brilliant Club
INSERT INTO rating (organisation_id, rating, comment, name, created_at)
VALUES (5, 4, "The Brilliant Club's programs have helped me gain confidence in my academic abilities.", "Oliver White", NOW());

INSERT INTO rating (organisation_id, rating, comment, name, created_at)
VALUES (5, 3, "I wish The Brilliant Club provided more support outside of the classroom.", "Emma Green", NOW());

-- RISE Projects
INSERT INTO rating (organisation_id, rating, comment, name, created_at)
VALUES (6, 5, "RISE Projects is doing incredible work in the community. Proud to be a part of it.", "Jessica Lee", NOW());

INSERT INTO rating (organisation_id, rating, comment, name, created_at)
VALUES (6, 4, "The programs offered by RISE Projects have helped me develop leadership skills.", "Matthew Harris", NOW());